import Image from 'next/image';

export default function ConsumptionSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Image on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* LEFT column - Image with border around image edge */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderTop: '2px solid #fff',
                borderBottom: '2px solid #fff',
                borderLeft: '2px solid #fff',
                borderTopLeftRadius: '1rem',
                borderBottomLeftRadius: '1rem'
              }}
            >
              <Image
                src="/images/singular pill.png"
                alt="Sharper Human Pill"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT column - Header and Content */}
          <div
            className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center"
            style={{
              borderTop: '2px solid #fff',
              borderBottom: '2px solid #fff',
              borderRight: '2px solid #fff',
              borderTopRightRadius: '1rem',
              borderBottomRightRadius: '1rem'
            }}
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Consumption & Usage
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
                Take with a small meal in the morning, preferably including a healthy fat source. Two ingredients are fat-soluble, so this enhances absorption and bioavailability of the complete Sharper Human stack.
              </p>

              <div className="pt-4">
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)] mb-4"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: '#fff'
                  }}
                >
                  Timing Tip:
                </h3>
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  For those seeking the additional physical performance benefits, take 60-90 minutes before workouts to capitalize on the strength and endurance-enhancing properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}