import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const userData = await response.json();

    // Get repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const reposData = await reposResponse.json();

    return NextResponse.json({
      user: userData,
      repositories: reposData,
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 });
  }
}