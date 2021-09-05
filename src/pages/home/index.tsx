import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import { BookAndBubble } from 'components/shape';
import { ToggleThemeButton } from 'components/button';
import { GradientVr } from 'components/line';
import { Parallax } from 'components/effect';
import Footer from 'components/footer';
import { TokenGroup } from './TokenGroup';
import { Education } from './Education';
import { Greet } from './Greet';
import { ScrollArrow } from './ScrollArrow';
import { ExperienceSection } from './ExperienceSection';
import useViewport from 'hooks/useViewport';

const Home: React.FC = (): JSX.Element => {
  const { width, xl } = useViewport();

  return (
    <Lending>
      <Helmet>
        <meta charSet="utf-8" />
        <title>swekiiz</title>
      </Helmet>
      <Parallax
        className="absolute z-10 right-8 top-8 xl:fixed"
        speedY={width < xl ? 0.93 : undefined}
      >
        <ToggleThemeButton />
      </Parallax>
      <Screen className="relative flex dark:bg-black bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-full xl:w-1/2">
            <Parallax
              speedX={width >= xl ? -1 : undefined}
              speedY={width >= xl ? -1.5 : 0.36}
            >
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
