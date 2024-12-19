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

async function fetchInstagramFeed(): Promise<InstagramPost[]> {
  const response = await fetch(`${process.env.API_URL}/api/instagram`, {
  });
  const data = await response.json();


  if (data.error) {
    throw new Error(data.error);
  }

  return data.posts || [];
}

export default async function InstagramFeed() {
  let posts: InstagramPost[] = [];
  let error: string | null = null;

  try {
    posts = await fetchInstagramFeed();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    error = `Failed to fetch Instagram feed: ${err.message}`;
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

        {error && <p>{error}</p>}

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
          {Array.isArray(posts) &&
            posts.slice(0, 9).map((post) => (
              <Link
                key={post.id}
                href={post.permalink}
                target="_blank"
                className="relative w-full h-0 pb-[100%] overflow-hidden bg-gray-100"
              >
                {(post.media_type === 'IMAGE' ||
                  (post.media_type === 'CAROUSEL_ALBUM' && post.media_url)) && (
                  <Image
                    src={post.thumbnail_url || post.media_url}
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover"
                  />
                )}
                {post.media_type === 'VIDEO' && (
                  <video
                    src={post.media_url|| post.thumbnail_url}
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover video-preview"
                  />
                )}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
