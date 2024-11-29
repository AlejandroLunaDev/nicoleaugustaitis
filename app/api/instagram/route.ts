import { NextResponse } from 'next/server';

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
  const { ACCESS_TOKEN } = process.env; // Asegúrate de tener esto en tu archivo .env.local
  if (!ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`
    );
    
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    // Asegúrate de mapear los datos a la interfaz InstagramPost
    const posts: InstagramPost[] = data.data.map((post: any) => ({
      id: post.id,
      caption: post.caption,
      media_type: post.media_type,
      media_url: post.media_url,
      thumbnail_url: post.thumbnail_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Instagram data' }, { status: 500 });
  }
}