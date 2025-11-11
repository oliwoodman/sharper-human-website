import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero relative flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-12" style={{ backgroundColor: '#000' }}>
      {/* Main content - two columns */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-[1400px] mx-auto w-full">
        {/* Left column - Text content */}
        <div className="hero-content flex-1 text-left max-w-[600px] md:-mt-8">
          {/* Main headline */}
          <h1
            className="tagline text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] mb-8 animate-fade-in-up-delay-200"
            style={{
              fontWeight: 200,
              letterSpacing: '-0.04em',
              color: '#fff'
            }}
          >
            Focus for<br />Founders.
          </h1>

          {/* Subheadline */}
          <p
            className="subtitle text-[clamp(1rem,2vw,1.2rem)] mb-12 animate-fade-in-up-delay-400"
            style={{
              color: '#999',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            20 research-backed ingredients. Zero stimulants. Built for founders.
          </p>

          {/* CTA button */}
          <div className="cta animate-fade-in-up-delay-600">
            <a
              href="#"
              className="btn inline-block py-4 px-10 text-[0.8rem] no-underline transition-all duration-300 bg-white text-black border-none cursor-pointer hover:-translate-y-0.5 hover:bg-[#f5f5f5]"
              style={{
                letterSpacing: '0.15em',
                fontWeight: 300,
                textTransform: 'uppercase',
                borderRadius: 0
              }}
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="flex-1 flex items-center justify-center max-w-[800px] w-full animate-float-in md:pt-16">
          <Image
            src="/images/sups-falling-no-cap.png"
            alt="Sharper Human Falling Supplements"
            width={800}
            height={1200}
            className="w-full h-auto max-h-[50vh] md:max-h-[90vh] object-contain"
          />
        </div>
      </div>

      {/* Scroll indicator - bottom center */}
      <div
        className="scroll-indicator absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delay-1000"
        style={{
          color: '#888',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          fontWeight: 300
        }}
      >
        <span className="uppercase">Explore</span>
        <div
          className="scroll-line w-px h-10 animate-scroll-pulse"
          style={{
            background: 'linear-gradient(to bottom, #888, transparent)'
          }}
        />
      </div>
    </div>
  );
}
