import React, { useState } from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet-async';
import { BookAndBubble } from 'components/shape';
import { HamburgerButton, ToggleThemeButton } from 'components/button';
import { GradientVr } from 'components/line';
import { Parallax } from 'components/effect';
import Footer from 'components/footer';
import { TokenGroup } from './TokenGroup';
import { Education } from './Education';
import { Greet } from './Greet';
import { ScrollArrow } from './ScrollArrow';
import { ExperienceSection } from './ExperienceSection';
import useViewport from 'hooks/useViewport';
import { MenuModal } from 'components/modal';

const Home: React.FC = (): JSX.Element => {
  const { width, xl } = useViewport();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Lending>
      <Helmet>
        <title>swekiiz</title>
      </Helmet>
      <MenuModal
        isOpen={isMenuOpen}
        closeModalEvent={() => setIsMenuOpen(false)}
      />
      <Parallax
        className="absolute z-10 left-8 top-8 xl:fixed"
        speedY={width < xl ? 0.82 : undefined}
      >
        <HamburgerButton onClick={() => setIsMenuOpen(true)} />
      </Parallax>
      <Parallax
        className="absolute z-10 right-8 top-8 xl:fixed"
        speedY={width < xl ? 0.82 : undefined}
      >
        <ToggleThemeButton />
      </Parallax>
      <Screen className="relative flex dark:bg-black bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-full xl:w-1/2">
            <Parallax speedY={0.36}>
              <Greet />
            </Parallax>
          </div>
          <GradientVr className="hidden xl:block" />
          <div className="relative hidden w-1/2 h-full xl:block">
            <TokenGroup />
          </div>
          <ScrollArrow />
        </div>
      </Screen>
      <Screen className="flex dark:bg-black bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="hidden w-1/2 h-full md:block">
            <BookAndBubble />
          </div>
          <GradientVr className="hidden md:block" />
          <div className="flex w-full md:w-1/2">
            <Education />
          </div>
        </div>
      </Screen>
      <ExperienceSection />
      <Footer />
    </Lending>
  );
};

export default Home;
