import { NextResponse } from 'next/server';

// Reduce revalidation time to 15 minutes to prevent URL expiration issues
export const revalidate = 900;

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

export async function GET() {
  const { ACCESS_TOKEN } = process.env;
  
  if (!ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing' }, { status: 400 });
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${ACCESS_TOKEN}`,
      { cache: 'no-store' } // Evitar el uso de caché
    );

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Filtrar posts con URLs válidas
    const validPosts = data.data.filter((post: InstagramPost) => post.media_url);

    return NextResponse.json({ 
      posts: validPosts,
      lastFetched: new Date().toISOString()
    });

  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Instagram feed error:', error);
        return NextResponse.json(
          { error: 'Failed to fetch Instagram feed', details: error.message },
          { status: 500 }
        );
    }
    return NextResponse.json(
      { error: 'Failed to fetch Instagram feed', details: 'Unknown error' },
      { status: 500 }
    );
  }
}
