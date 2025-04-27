import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  console.log(name);
  if (!name) {
    return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // 깃허브 personal access token
  const GITHUB_REPO = process.env.GITHUB_REPO; // 예: 'username/repo-name'

  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return NextResponse.json({ success: false, error: 'Server misconfiguration' }, { status: 500 });
  }

  const url = `https://api.github.com/repos/${GITHUB_REPO}/issues`;

  const issueTitle = `New Participation: ${name}`;
  const issueBody = `참여자가 등록되었습니다.\n\n이름: ${name}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        title: issueTitle,
        body: issueBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API Error:', errorData);
      return NextResponse.json({ success: false, error: errorData.message }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, issueUrl: data.html_url });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ success: false, error: 'Unexpected server error' }, { status: 500 });
  }
}
