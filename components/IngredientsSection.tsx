'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const allIngredients = [
  { name: 'Acetyl L-Carnitine', image: '/images/Ingredients/Acetyl L-Carnitine.png' },
  { name: 'Algae Powder (DHA)', image: '/images/Ingredients/Algae Powder (DHA).png' },
  { name: 'Bacopa Monnieri', image: '/images/Ingredients/Bacopa Monnieri.png' },
  { name: 'Bilberries (Blueberry Extract)', image: '/images/Ingredients/Bilberries (Blueberry Extract).png' },
  { name: 'Citicoline', image: '/images/Ingredients/Citicoline.png' },
  { name: 'L-Taurine', image: '/images/Ingredients/L-Taurine.png' },
  { name: 'L-Tyrosine', image: '/images/Ingredients/L-Tyrosine.png' },
  { name: 'Lions Mane', image: '/images/Ingredients/Lions Mane.png' },
  { name: 'Lutein (Marigold)', image: '/images/Ingredients/Lutein (Marigold).png' },
  { name: 'Phosphatidylserine', image: '/images/Ingredients/Phosphatidylserine.png' },
  { name: 'Rhodiola Rosea', image: '/images/Ingredients/Rhodiola Rosea.png' },
  { name: 'Vit B1 - Thiamine', image: '/images/Ingredients/Vit B1 - Thiamine.png' },
  { name: 'Vit B2 - Riboflavin', image: '/images/Ingredients/Vit B2 - Riboflavin.png' },
  { name: 'Vit B3 - Niacin', image: '/images/Ingredients/Vit B3 - Niacin.png' },
  { name: 'Vit B5 - CDP', image: '/images/Ingredients/Vit B5 - CDP.png' },
  { name: 'Vit B6 - Pyridoxine', image: '/images/Ingredients/Vit B6 - Pyridoxine.png' },
  { name: 'Vit B7 - Biotin', image: '/images/Ingredients/Vit B7 - Biotin.png' },
  { name: 'Vit B9 - Folate', image: '/images/Ingredients/Vit B9 - Folate.png' },
  { name: 'Vit B12 - Cobalamin', image: '/images/Ingredients/Vit B12 - Cobalamin.png' },
  { name: 'Zinc', image: '/images/Ingredients/Zinc.png' },
];

// Split into two rows
const topRowIngredients = allIngredients.slice(0, 10);
const bottomRowIngredients = allIngredients.slice(10, 20);

export default function IngredientsSection() {
  const topScrollRef = useRef<HTMLDivElement>(null);
  const bottomScrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);
  const isHoveredRef = useRef(false);
  const [selectedIngredient, setSelectedIngredient] = useState<typeof allIngredients[0] | null>(null);
  const [selectedRow, setSelectedRow] = useState<'top' | 'bottom' | null>(null);

  useEffect(() => {
    const topContainer = topScrollRef.current;
    const bottomContainer = bottomScrollRef.current;
    if (!topContainer || !bottomContainer) return;

    let topScrollPosition = 0;
    let bottomScrollPosition = bottomContainer.scrollWidth / 2;
    const scrollSpeed = 0.5;

    // Handle mouse enter - pause auto-scroll
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };

    // Handle mouse leave - resume auto-scroll
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      topScrollPosition = topContainer.scrollLeft;
      bottomScrollPosition = bottomContainer.scrollLeft;
    };

    // Handle user scroll - sync the other carousel
    const handleTopScroll = () => {
      // Only sync when user is hovering and manually scrolling
      if (!isProgrammaticScrollRef.current && isHoveredRef.current) {
        isProgrammaticScrollRef.current = true;
        const topScroll = topContainer.scrollLeft;
        const topMaxScroll = topContainer.scrollWidth / 2;
        const bottomMaxScroll = bottomContainer.scrollWidth / 2;

        // Use modulo to keep scroll position within one set of items for infinite loop
        const normalizedTopScroll = topScroll % topMaxScroll;
        const topPercentage = normalizedTopScroll / topMaxScroll;
        // Apply the inverse percentage to the bottom carousel
        bottomContainer.scrollLeft = bottomMaxScroll * (1 - topPercentage);

        isProgrammaticScrollRef.current = false;
      }
    };

    const handleBottomScroll = () => {
      // Only sync when user is hovering and manually scrolling
      if (!isProgrammaticScrollRef.current && isHoveredRef.current) {
        isProgrammaticScrollRef.current = true;
        const bottomScroll = bottomContainer.scrollLeft;
        const bottomMaxScroll = bottomContainer.scrollWidth / 2;
        const topMaxScroll = topContainer.scrollWidth / 2;

        // Use modulo to keep scroll position within one set of items for infinite loop
        const normalizedBottomScroll = bottomScroll % bottomMaxScroll;
        const bottomPercentage = normalizedBottomScroll / bottomMaxScroll;
        // Apply the inverse percentage to the top carousel
        topContainer.scrollLeft = topMaxScroll * (1 - bottomPercentage);

        isProgrammaticScrollRef.current = false;
      }
    };

    topContainer.addEventListener('mouseenter', handleMouseEnter);
    topContainer.addEventListener('mouseleave', handleMouseLeave);
    bottomContainer.addEventListener('mouseenter', handleMouseEnter);
    bottomContainer.addEventListener('mouseleave', handleMouseLeave);
    topContainer.addEventListener('scroll', handleTopScroll);
    bottomContainer.addEventListener('scroll', handleBottomScroll);

    const scroll = () => {
      // Pause auto-scroll when hovered or when a card is expanded
      if (topContainer && bottomContainer && !isHoveredRef.current && !selectedIngredient) {
        isProgrammaticScrollRef.current = true;

        // Calculate max scroll dynamically in case of expanded cards
        const topMaxScroll = topContainer.scrollWidth / 2;
        const bottomMaxScroll = bottomContainer.scrollWidth / 2;

        // Top carousel scrolls right (forward)
        topScrollPosition += scrollSpeed;
        if (topScrollPosition >= topMaxScroll) {
          topScrollPosition = 0;
          topContainer.scrollLeft = 0;
        }
        topContainer.scrollLeft = topScrollPosition;

        // Bottom carousel scrolls left (reverse)
        bottomScrollPosition -= scrollSpeed;
        if (bottomScrollPosition <= 0) {
          bottomScrollPosition = bottomMaxScroll;
          bottomContainer.scrollLeft = bottomMaxScroll;
        }
        bottomContainer.scrollLeft = bottomScrollPosition;

        isProgrammaticScrollRef.current = false;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      topContainer.removeEventListener('mouseenter', handleMouseEnter);
      topContainer.removeEventListener('mouseleave', handleMouseLeave);
      bottomContainer.removeEventListener('mouseenter', handleMouseEnter);
      bottomContainer.removeEventListener('mouseleave', handleMouseLeave);
      topContainer.removeEventListener('scroll', handleTopScroll);
      bottomContainer.removeEventListener('scroll', handleBottomScroll);
    };
  }, [selectedIngredient]);

  const IngredientCard = ({
    ingredient,
    row
  }: {
    ingredient: typeof allIngredients[0];
    row: 'top' | 'bottom';
  }) => {
    const isSelected = selectedIngredient?.name === ingredient.name && selectedRow === row;

    if (isSelected) {
      // Expanded view - image on left, text on right for top row, opposite for bottom
      const isTopRow = row === 'top';
      return (
        <div
          className="flex-shrink-0 bg-white rounded-sm p-6 animate-fade-in-up cursor-pointer"
          style={{ width: '440px', height: '200px' }}
          onClick={() => {
            setSelectedIngredient(null);
            setSelectedRow(null);
          }}
        >
          <div className={`flex gap-4 h-full ${isTopRow ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '150px' }}>
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={150}
                height={150}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3
                className="text-[1.1rem]"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.02em',
                  color: '#000'
                }}
              >
                {ingredient.name}
              </h3>
            </div>
          </div>
        </div>
      );
    }

    // Normal card view
    return (
      <div className="flex-shrink-0" style={{ width: '200px' }}>
        <div
          className="bg-white rounded-sm p-6 cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => {
            setSelectedIngredient(ingredient);
            setSelectedRow(row);
          }}
        >
          <Image
            src={ingredient.image}
            alt={ingredient.name}
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header - centered */}
        <div className="text-center mb-16">
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1]"
            style={{
              fontWeight: 100,
              letterSpacing: '-0.02em',
              color: '#fff'
            }}
          >
            20 Research-Backed, Premium Grade Ingredients
          </h2>
        </div>

        {/* Two column layout - Carousels on LEFT, Text on RIGHT */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">
          {/* LEFT column - Two stacked auto-scrolling carousels */}
          <div className="w-full md:w-[55%] space-y-6 relative mx-auto">
            {/* Top carousel - scrolls right */}
            <div
              ref={topScrollRef}
              className="relative overflow-x-scroll scrollbar-hide"
              style={{ willChange: 'scroll-position' }}
            >
              <div
                className="flex gap-6 flex-nowrap"
              >
                {[...topRowIngredients, ...topRowIngredients].map((ingredient, index) => (
                  <IngredientCard key={`top-${index}`} ingredient={ingredient} row="top" />
                ))}
              </div>
            </div>

            {/* Bottom carousel - scrolls left */}
            <div
              ref={bottomScrollRef}
              className="relative overflow-x-scroll scrollbar-hide"
              style={{ willChange: 'scroll-position' }}
            >
              <div
                className="flex gap-6 flex-nowrap"
              >
                {[...bottomRowIngredients, ...bottomRowIngredients].map((ingredient, index) => (
                  <IngredientCard key={`bottom-${index}`} ingredient={ingredient} row="bottom" />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT column - Text content stacked */}
          <div className="flex-1 space-y-10">
            {/* Quote */}
            <h3
              className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
              style={{
                fontWeight: 200,
                letterSpacing: '0.05em',
                color: '#fff',
                fontStyle: 'italic'
              }}
            >
              &ldquo;20 Research-Backed, Focus Enhancing Ingredients.&rdquo;
            </h3>

            {/* What Makes Our Stack Different */}
            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                What Makes Our Stack Different:
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
                As important as what&apos;s <span style={{ fontWeight: 600 }}>IN</span> the Sharper Human stack is what we <span style={{ fontWeight: 600 }}>REMOVED</span>. During our research process, we eliminated dozens of ingredients originally marketed as effective nootropics that, research shows limited real world, long term positive benefits.
              </p>
            </div>

            {/* Our Premium Ingredient Stack */}
            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                Our Premium Ingredient Stack:
              </h3>
            </div>

            {/* Closing paragraphs */}
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
                This ingredient stack was formulated to stack each compound&apos;s benefits on top of the others, creating a synergistic effect that&apos;s greater than the sum of its parts.
              </p>
              <p
                className="text-[clamp(0.95rem,2vw,1.05rem)]"
                style={{
                  color: '#999',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6
                }}
              >
                Full ingredient profiles, dosage information and links to scientific evidence are available on our individual detailed product research pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}