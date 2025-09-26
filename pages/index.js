export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Intelligent Digital Innovation Agency
      </h1>
      <p style={{ fontSize: '1.125rem', maxWidth: '40rem', textAlign: 'center', lineHeight: 1.6 }}>
        We craft immersive digital experiences that blend art, technology, and human-centered design.
        Explore our work and discover how we can help bring your next idea to life.
      </p>
    </main>
  );
}
