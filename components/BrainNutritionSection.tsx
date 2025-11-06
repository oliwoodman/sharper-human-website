import Image from 'next/image';

export default function BrainNutritionSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Image on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
          {/* LEFT column - Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/images/Unboxing Shaper Human.png"
              alt="Brain Nutrition"
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>

          {/* RIGHT column - Header and Content */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Brain Nutrition - Why Your Brain Deserves Better
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
                We nourish our bodies and supplement our physical health religiously - nutrition, gut health, cold plunges, saunas, and sleep optimization. Yet brain health consistently falls through the cracks, <span style={{ fontWeight: 600 }}>despite being the single most important thing you can do for both mental and physical health</span>.
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
                A nootropic is a supplement that helps your brain perform better, usually in two key ways: <span style={{ fontWeight: 600 }}>focus/cognition/memory</span> and <span style={{ fontWeight: 600 }}>neuroprotective benefits</span>.
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
                In short, quality natural nootropics help you focus better and think clearer for longer, both on a micro scale (day-to-day decision making) and macro scale (decade-to-decade brain preservation and robustness).
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
                In business, there are micro decisions (daily choices that compound) and macro strategies (leading and building consistently for years). When you optimize both levels, you create the foundation for extraordinary entrepreneurial success. <span style={{ fontWeight: 600 }}>Sharper Human is the culmination of 5 years of research</span> designed to enable exactly this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}