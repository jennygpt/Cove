import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cove MCP Server</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Cove MCP Server</h1>
        <p>Send POST requests to <code>/api/mcp</code> to interact with the server.</p>
      </main>
    </>
  );
}
