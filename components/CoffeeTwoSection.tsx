export default function CoffeeTwoSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Content on LEFT, Quote card on RIGHT */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          {/* LEFT column - Header and main content with white border */}
          <div
            className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center border-2 border-white rounded-2xl md:border-r-0 md:rounded-r-none"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              This is Coffee 2.0 - &ldquo;Why No Caffeine?&rdquo;
            </h2>

            <div className="space-y-6">
            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              Caffeine is a legitimately effective nootropic. But it&apos;s also an <span style={{ fontWeight: 600 }}>accelerator</span> - potent but many react very differently to it. It&apos;s also a short term solution to a long term problem.
            </p>

            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              <span style={{ fontWeight: 600 }}>Zero caffeine or synthetic stimulants.</span> We believe adding caffeine to a brain supplement stack is simply cheating the customer into &ldquo;feeling&rdquo; the product work, rather than developing ingredients that create genuine, lasting cognitive enhancement.
            </p>

            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              This caffeine-free approach allows you to take Sharper Human <span style={{ fontWeight: 600 }}>with or without your daily coffee or caffeine consumption</span>, depending on your preferences and individual caffeine tolerance.
            </p>
          </div>
          </div>

          {/* RIGHT column - Quote card with white background - full height */}
          <div
            className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center rounded-2xl md:rounded-l-none"
            style={{
              backgroundColor: '#f5f5f5'
            }}
          >
            <blockquote
              className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.1] text-center"
              style={{
                fontWeight: 200,
                letterSpacing: '-0.01em',
                color: '#1a1a1a',
                fontStyle: 'italic'
              }}
            >
              &ldquo;We built this for founders
              <br />
              looking to dominate without
              <br />
              dependence on caffeine.&rdquo;
            </blockquote>
          </div>
      </div>
      </div>
    </section>
  );
}