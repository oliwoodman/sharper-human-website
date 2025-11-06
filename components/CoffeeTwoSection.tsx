export default function CoffeeTwoSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Header/Quote on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* LEFT column - Closing quote */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <blockquote
              className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.1] max-w-[500px]"
              style={{
                fontWeight: 200,
                letterSpacing: '-0.01em',
                color: '#fff',
                fontStyle: 'italic'
              }}
            >
              "We built this for founders
              <br />
              looking to dominate without
              <br />
              dependence on caffeine."
            </blockquote>
          </div>

          {/* RIGHT column - Header and main content */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              This is Coffee 2.0 - "Why No Caffeine?"
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
              Caffeine is a legitimately effective nootropic. But it's also an <span style={{ fontWeight: 600 }}>accelerator</span> - potent but many react very differently to it. It's also a short term solution to a long term problem.
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
              <span style={{ fontWeight: 600 }}>Zero caffeine or synthetic stimulants.</span> We believe adding caffeine to a brain supplement stack is simply cheating the customer into "feeling" the product work, rather than developing ingredients that create genuine, lasting cognitive enhancement.
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
      </div>
      </div>
    </section>
  );
}