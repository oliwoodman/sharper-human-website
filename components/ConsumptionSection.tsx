import Image from 'next/image';

export default function ConsumptionSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Image on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          {/* LEFT column - Image with border around image edge */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className="relative w-full overflow-hidden border-2 border-white rounded-2xl md:border-r-0 md:rounded-r-none"
              style={{
                backgroundColor: '#000',
                aspectRatio: '1.2 / 1'
              }}
            >
              <Image
                src="/images/two pills.png"
                alt="Sharper Human Pill"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* RIGHT column - Header and Content */}
          <div
            className="flex-1 p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-center border-2 border-white rounded-2xl md:border-l-0 md:rounded-l-none"
            style={{
              backgroundColor: '#000'
            }}
          >
            <h2
              className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-6"
              style={{
                fontWeight: 200,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Consumption & Usage
            </h2>

            <div className="space-y-5">
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Take with a small meal in the morning, preferably including a healthy fat source. Two ingredients are fat-soluble, so this enhances absorption and bioavailability of the complete Sharper Human stack.
              </p>

              <div className="pt-4">
                <h3
                  className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: '#fff'
                  }}
                >
                  Timing Tip
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