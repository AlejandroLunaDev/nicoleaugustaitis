import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url: string;
}

async function fetchInstagramFeed(): Promise<{ posts: InstagramPost[]; lastFetched: string }> {
  const response = await fetch(`${process.env.API_URL}/api/instagram`, {
    next: {
      revalidate: 900, // Revalidar cada 15 minutos
    },
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return {
    posts: data.posts || [],
    lastFetched: data.lastFetched,
  };
}

// Verificar si una URL de recurso multimedia es válida
async function validateMediaUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

export default async function InstagramFeed() {
  let posts: InstagramPost[] = [];
  let error: string | null = null;
  let lastFetched: string | null = null;

  try {
    const data = await fetchInstagramFeed();

    // Validar URLs antes de renderizar
    posts = await Promise.all(
      data.posts.map(async (post) => {
        const isValid = await validateMediaUrl(post.media_url);
        return isValid ? post : null;
      })
    ).then((results) => results.filter(Boolean) as InstagramPost[]);

    lastFetched = data.lastFetched;
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = `Failed to fetch Instagram feed: ${err.message}`;
      console.error('Instagram feed error:', err);
    } else {
      error = 'An unknown error occurred';
      console.error('Instagram feed error:', err);
    }
  }

  return (
    <div>
      <section id="instagram" className="px-2">
        <Link
          target="_blank"
          href="https://www.instagram.com/psi.nicoleaugustaitis/"
          className="flex gap-2 items-center mb-4"
        >
          <FaInstagram className="text-lg md:text-4xl text-primary" />
          <p className="text-xl md:text-3xl">psi.nicoleaugustaitis</p>
        </Link>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
          {Array.isArray(posts) &&
            posts.slice(0, 9).map((post, index) => (
              <Link
                key={post.id}
                href={post.permalink}
                target="_blank"
                className="relative w-full h-0 pb-[100%] overflow-hidden bg-gray-100 group"
              >
                {(post.media_type === 'IMAGE' ||
                  post.media_type === 'CAROUSEL_ALBUM') && (
                  <Image
                    src={post.media_url || post.thumbnail_url}
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    priority={index < 3}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                )}
                {post.media_type === 'VIDEO' && post.thumbnail_url && (
                  <Image
                    src={post.thumbnail_url}
                    alt={post.caption || 'Instagram video thumbnail'}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    priority={index < 3}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                )}
              </Link>
            ))}
        </div>

        {lastFetched && (
          <div className="text-xs text-gray-500 mt-4 text-right">
            Última actualización: {new Date(lastFetched).toLocaleTimeString()}
          </div>
        )}
      </section>
    </div>
  );
}