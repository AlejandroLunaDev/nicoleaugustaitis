import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const revalidate = 3600;

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
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);

  if (!ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing' }, { status: 400 });
  }

  try {
    // Request smaller image sizes for mobile
    const fields = isMobile 
      ? 'id,caption,media_type,thumbnail_url,permalink,timestamp'
      : 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    const posts: InstagramPost[] = data.data.map((post: InstagramPost) => ({
      id: post.id,
      caption: post.caption,
      media_type: post.media_type,
      media_url: isMobile ? (post.thumbnail_url || post.media_url) : post.media_url,
      thumbnail_url: post.thumbnail_url || post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram data' }, { status: 500 });
  }
}