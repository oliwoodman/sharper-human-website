export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center border-t" style={{ borderColor: '#1a1a1a', paddingTop: '3rem' }}>
          <p
            className="text-[clamp(1.2rem,2.5vw,1.8rem)]"
            style={{
              fontWeight: 200,
              letterSpacing: '0.02em',
              color: '#fff',
              fontStyle: 'italic'
            }}
          >
            Focus for decades, not minutes.
          </p>
        </div>
      </div>
    </footer>
  );
}