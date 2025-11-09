'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this for Everyone?",
      answer: "No, Sharper Human is a powerful, premium-grade brain supplement created for individuals who want to focus intensively for 8+ hours daily and improve their mental and physical health over years and decades. This is not for someone who hasn't previously tried to optimize their brain health."
    },
    {
      question: "Can I take this with coffee/caffeine?",
      answer: "Absolutely. There's no caffeine in Sharper Human, which allows you to customise your stimulant intake based on your individual tolerance and daily preferences."
    },
    {
      question: "Where is this produced?",
      answer: "Production happens in the EU, distribution is from the UK."
    },
    {
      question: "Is Sharper Human Vegetarian?",
      answer: "Our DHA is algae-derived (not fish-based), making it both environmentally sustainable and vegetarian-friendly."
    },
    {
      question: "I'm not an entrepreneur or founder - will this still help?",
      answer: "Sharper Human was originally designed for business owners, but we now have users across all fields: traders, athletes, gamers, teachers, ex military personnel and more. One of our favorite testimonials came from someone who takes Sharper Human to be \"A Sharper Father.\""
    },
    {
      question: "How long before I notice effects?",
      answer: "Most individuals feel initial acute effects after 14-30 days, with 60 days being the sweet spot for experiencing a noticeable cognitive enhancement versus day 0. We recommend taking baseline cognitive tests before starting and repeating them at 60 and 90 days to measure your improvement objectively."
    },
    {
      question: "Are all ingredients natural and legal?",
      answer: "Yes, all 20 ingredients are natural and to our knowledge legal in our sellable jurisdictions but you should always check with your local government if you have any concerns."
    },
    {
      question: "Is it safe with medications/other supplements?",
      answer: "Generally yes, but always consult your healthcare provider or GP if you have existing conditions or take medications. From a supplement perspective, Sharper Human provides comprehensive brain health support, though proper nutrition and exercise remain essential."
    },
    {
      question: "Why capsules instead of powder?",
      answer: "It tasted terrible! With 20 potent ingredients, including DHA (very salty), lions mane mushroom (not great), the taste profile was simply too bad to be used as a powder. Capsules ensure consistent dosing and palatability as well."
    },
    {
      question: "How will I know it's working?",
      answer: "Beyond the objective tests we recommend, most users report \"thinking quicker\" and \"improved recall speed\". You'll feel sharper in day-to-day mental tasks and decision-making. As well as many noting energy related benefits."
    },
    {
      question: "Any calories?",
      answer: "Yes, the DHA (algae oil) is fat-soluble and hence contains trace calories although very minimal."
    },
    {
      question: "Where is Sharper Human based?",
      answer: "We're based in Bristol, UK, with remote offices in London."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Half FAQs on LEFT, Title + Half FAQs on RIGHT */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* LEFT column - First half of FAQs */}
          <div className="flex-1 space-y-4" style={{ marginTop: 'calc(clamp(2rem, 5vw, 3.5rem) * 1.1 + 2rem)' }}>
            {leftFaqs.map((faq, index) => (
              <div
                key={index}
                className="border-b"
                style={{ borderColor: '#1a1a1a' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex justify-between items-center text-left"
                  style={{ outline: 'none' }}
                >
                  <h3
                    className="text-[clamp(1rem,2vw,1.2rem)] pr-4"
                    style={{
                      fontWeight: 400,
                      letterSpacing: '0.01em',
                      color: '#fff'
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className="text-[1.5rem] flex-shrink-0"
                    style={{
                      color: '#666',
                      transition: 'transform 0.3s ease',
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pb-6">
                    <p
                      className="text-[clamp(0.95rem,1.8vw,1.05rem)] animate-fade-in-up"
                      style={{
                        color: '#fff',
                        fontWeight: 300,
                        letterSpacing: '0.01em',
                        lineHeight: 1.6
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT column - Header + Second half of FAQs */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {rightFaqs.map((faq, index) => {
                const actualIndex = midPoint + index;
                return (
                  <div
                    key={actualIndex}
                    className="border-b"
                    style={{ borderColor: '#1a1a1a' }}
                  >
                    <button
                      onClick={() => toggleFAQ(actualIndex)}
                      className="w-full py-6 flex justify-between items-center text-left"
                      style={{ outline: 'none' }}
                    >
                      <h3
                        className="text-[clamp(1rem,2vw,1.2rem)] pr-4"
                        style={{
                          fontWeight: 400,
                          letterSpacing: '0.01em',
                          color: '#fff'
                        }}
                      >
                        {faq.question}
                      </h3>
                      <span
                        className="text-[1.5rem] flex-shrink-0"
                        style={{
                          color: '#666',
                          transition: 'transform 0.3s ease',
                          transform: openIndex === actualIndex ? 'rotate(45deg)' : 'rotate(0deg)'
                        }}
                      >
                        +
                      </span>
                    </button>

                    {openIndex === actualIndex && (
                      <div className="pb-6">
                        <p
                          className="text-[clamp(0.95rem,1.8vw,1.05rem)] animate-fade-in-up"
                          style={{
                            color: '#fff',
                            fontWeight: 300,
                            letterSpacing: '0.01em',
                            lineHeight: 1.6
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}