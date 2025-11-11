import Image from 'next/image';

export default function DosageSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Text content on LEFT, Image on RIGHT */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* LEFT column - All text content */}
          <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2
              className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 200,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Dosage Matters - What Most Get Wrong
            </h2>

            <div className="space-y-5 mb-8">
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Our dosages are <span style={{ fontWeight: 600 }}>higher than many</span> but <span style={{ fontWeight: 600 }}>strategically lower than clinical studies</span> for one critical reason: <span style={{ fontWeight: 600 }}>longevity</span>.
              </p>
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                <span style={{ fontWeight: 600 }}>Clinical trials use higher dosages because timeframes are shorter.</span> We&apos;re building focus for decades, not just days or weeks. Each ingredient is dosed at the <span style={{ fontWeight: 600 }}>minimum effective level</span> to avoid the pitfalls of long-term overdosing while ensuring therapeutic benefit.
              </p>
            </div>

            {/* The Industry Problem */}
            <div className="mb-8">
              <h3
                className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
                style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#fff'
                }}
              >
                The Industry Problem
              </h3>
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Most brands either under-dose ingredients below the Minimum Effective Dose making benefits negligible (usually to save cost) or over-dose for short-term &ldquo;feel-good&rdquo; effects of easily &ldquo;feel-able&rdquo; nootropics that aren&apos;t sustainable (such as caffeine).
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3
                className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
                style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#fff'
                }}
              >
                Our Solution
              </h3>
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                All dosages are pulled directly from peer-reviewed scientific studies, optimized for both immediate cognitive enhancement and long-term brain health, confirmed by multiple nootropic experts in the industry.
              </p>
            </div>
          </div>

          {/* RIGHT column - Dosage label image */}
          <div className="flex-[0.75] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center" style={{ maxWidth: '85%' }}>
              <Image
                src="/images/Sharper Human Nutritional Label Dosage.jpeg"
                alt="Sharper Human Nutritional Label"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}