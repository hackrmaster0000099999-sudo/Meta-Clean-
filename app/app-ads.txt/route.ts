import {NextResponse} from 'next/server';

export async function GET() {
  // Start.io & Authorized Digital Sellers specification for com.metaclean.bypass
  const content = `# app-ads.txt for com.metaclean.bypass (MetaClean Android App)
# Start.io Publisher Verification
start.io, 102938475, DIRECT, f08c47fec0942fa0
google.com, pub-9444956013660000, DIRECT, f08c47fec0942fa0
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
