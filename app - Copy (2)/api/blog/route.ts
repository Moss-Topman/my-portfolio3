import { NextResponse } from 'next/server';

// This would typically connect to a database
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with AI Prompt Engineering',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2024-01-15',
  },
  // Add more blog posts
];

export async function GET() {
  try {
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}