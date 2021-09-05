import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import { BookAndBubble } from 'components/shape';
import Footer from 'components/footer';
import { GradientVr } from 'components/line';
import { Parallax } from 'components/effect';
import { TokenGroup } from './TokenGroup';
import { Education } from './Education';
import { Greet } from './Greet';
import { ScrollArrow } from './ScrollArrow';
import { ExperienceSection } from './ExperienceSection';

const Home: React.FC = (): JSX.Element => {
  return (
    <Lending>
      <Helmet>
        <meta charSet="utf-8" />
        <title>swekiiz</title>
      </Helmet>
      <Screen className="relative flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-full xl:w-1/2">
            <Parallax speedX={-1} speedY={-1.5}>
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
      <Screen className="flex bg-white">
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
