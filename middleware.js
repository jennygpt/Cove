import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Allow ElevenLabs and other API clients
  if (userAgent.includes('python-httpx') || userAgent.includes('ElevenLabs')) {
    return NextResponse.next();
  }

  // Default: proceed normally
  return NextResponse.next();
}
