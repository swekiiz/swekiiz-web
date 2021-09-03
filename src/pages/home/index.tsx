import React, { Fragment } from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import Book from 'assets/images/book.svg';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Experience, IExperience } from 'components/card';
import Footer from 'components/footer';
import { Circle } from 'components/shape';
import { name, surname } from 'constants/name';
import { getImg } from 'services/getImages';
import useParallaxScroll from 'hooks/useParallaxScroll';
import useViewport from 'hooks/useViewport';

const Home: React.FC = (): JSX.Element => {
  const { offSetY } = useParallaxScroll();
  const { width, lg } = useViewport();

  const experiencesList: IExperience[] = [
    {
      year: '2017',
      title: 'Thailand open hackathon at Commart work 2017',
      description: 'Participated in a competition and get a consolation prize.',
    },
    {
      year: '2017-2018',
      title: 'Olympic Computer Camp (POSN)',
      description:
        'Participated in Olympic Computer Camp at Naresuan University and be in agent of Naresuan University to TOI14 contest.',
    },
    {
      year: '2018',
      title: 'Techjam 2018 code squad (by KBTG)',
      description: 'Participated in a competition and join to final round.',
    },
    {
      year: '2018',
      title: 'Thailand Olympiad in Informatics 14th (TOI)',
      description: 'Final round of Olympic Computer Camp',
    },
    {
      year: '2019',
      title: 'International Collegiate Programming Contest (ICPC)',
      description: 'Participated in a competition and join to second round.',
    },
    {
      year: '2019',
      title: 'Techjam 2019 deep jam (by KBTG)',
      description: 'Participated in a competition and join to final round.',
    },
    {
      year: '2020',
      title: 'AI-Chatbot Telecommunications and ICT Honer',
      description:
        'Participated in a competition and get a consolation prize in final round.',
    },
    {
      year: '2020-2021',
      title: 'Testament, Inc.',
      description:
        '8 Mouth of Full Stack developer and blockchain developer for create DApp.',
    },
  ];

  return (
    <Lending>
      <Helmet>
        <meta charSet="utf-8" />
        <title>swekiiz</title>
      </Helmet>
      <Screen className="relative flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-full xl:w-1/2">
            <h1
              className="text-gradient-fixed text-center text-2xl font-semibold leading-tight sm:text-left sm:text-5xl"
              style={{ transform: `translateY(${offSetY * 0.2}px)` }}
            >
              Hi, my name is <br />
              {name} {surname}
            </h1>
          </div>
          <div className="vertical-gradient hidden xl:block" />
          <div className="relative hidden w-1/2 h-full xl:block">
            <img
              className="absolute block w-60 h-60"
              src={getImg('ETH')}
              style={{
                top: '160px',
                left: '220px',
                transform: `translateY(${offSetY * 0.0001}px)`,
              }}
            />
            <img
              className="absolute block w-30 h-30"
              src={getImg('BNB')}
              style={{
                top: '40px',
                left: '160px',
                transform: `translateY(-${offSetY * 0.33}px)`,
              }}
            />
            <img
              className="absolute block w-26 h-26"
              src={getImg('MATIC')}
              style={{
                top: '355px',
                left: '90px',
                transform: `translateY(-${offSetY * 0.32}px)`,
              }}
            />
            <img
              className="absolute block w-24 h-24"
              src={getImg('BTC')}
              style={{
                top: '0px',
                left: '410px',
                transform: `translateY(${offSetY * 0.52}px)`,
              }}
            />
            <img
              className="absolute block w-22 h-22"
              src={getImg('ADA')}
              style={{
                top: '145px',
                left: '436px',
                transform: `translateY(-${offSetY * 0.21}px)`,
              }}
            />
            <img
              className="absolute block w-18 h-18"
              src={getImg('CAKE')}
              style={{
                top: '390px',
                left: '440px',
                transform: `translateY(-${offSetY * 0.2}px)`,
              }}
            />
            <img
              className="absolute block w-20 h-20"
              src={getImg('UNI')}
              style={{
                top: '415px',
                left: '245px',
                transform: `translateY(-${offSetY * 0.7}px)`,
              }}
            />
          </div>
          <div
            className="horizontal-center absolute bottom-10"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: offSetY === 0 ? '1' : '0',
            }}
          >
            <HiArrowNarrowDown className="w-auto h-16 text-light-gray" />
          </div>
        </div>
      </Screen>
      <Screen className="flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="hidden w-1/2 h-full md:block">
            <div
              className="relative m-auto"
              style={{ height: '100%', width: '228px' }}
            >
              <img
                className="absolute block w-auto h-20"
                style={{
                  bottom: '0',
                  right: '0',
                }}
                src={Book}
              />
              <Circle
                radius={'10px'}
                angle={'0deg'}
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  right: '100px',
                }}
              />
              <Circle
                radius={'11px'}
                angle={'5deg'}
                style={{
                  position: 'absolute',
                  bottom: '110px',
                  right: '90px',
                }}
              />
              <Circle
                radius={'12px'}
                angle={'10deg'}
                style={{
                  position: 'absolute',
                  bottom: '120px',
                  right: '117px',
                }}
              />
              <Circle
                radius={'13px'}
                angle={'15deg'}
                style={{
                  position: 'absolute',
                  bottom: '135px',
                  right: '110px',
                }}
              />
              <Circle
                radius={'14px'}
                angle={'20deg'}
                style={{
                  position: 'absolute',
                  bottom: '155px',
                  right: '90px',
                }}
              />
              <Circle
                radius={'15px'}
                angle={'25deg'}
                style={{
                  position: 'absolute',
                  bottom: '170px',
                  right: '130px',
                }}
              />
              <Circle
                radius={'16px'}
                angle={'30deg'}
                style={{
                  position: 'absolute',
                  bottom: '180px',
                  right: '75px',
                }}
              />
              <Circle
                radius={'17px'}
                angle={'35deg'}
                style={{
                  position: 'absolute',
                  bottom: '190px',
                  right: '101px',
                }}
              />
              <Circle
                radius={'18px'}
                angle={'40deg'}
                style={{
                  position: 'absolute',
                  bottom: '200px',
                  right: '140px',
                }}
              />
              <Circle
                radius={'19px'}
                angle={'45deg'}
                style={{
                  position: 'absolute',
                  bottom: '210px',
                  right: '84px',
                }}
              />
              <Circle
                radius={'20px'}
                angle={'50deg'}
                style={{
                  position: 'absolute',
                  bottom: '230px',
                  right: '130px',
                }}
              />
              <Circle
                radius={'21px'}
                angle={'55deg'}
                style={{
                  position: 'absolute',
                  bottom: '245px',
                  right: '160px',
                }}
              />
              <Circle
                radius={'22px'}
                angle={'60deg'}
                style={{
                  position: 'absolute',
                  bottom: '252px',
                  right: '78px',
                }}
              />
              <Circle
                radius={'180px'}
                angle={'65deg'}
                style={{
                  position: 'absolute',
                  bottom: '280px',
                  right: '48px',
                }}
              />
              <div
                className="center-with-flex absolute bg-white rounded-full"
                style={{
                  width: '168px',
                  height: '168px',
                  bottom: '286px',
                  right: '54px',
                }}
              >
                <div className="mark-img-lightbulb relative z-10 block w-28 h-28" />
              </div>
            </div>
          </div>
          <div className="vertical-gradient hidden md:block" />
          <div className="flex w-full md:w-1/2">
            <div className="flex flex-col items-start justify-start m-auto p-8 space-y-4 sm:p-16">
              <h1 className="text-gradient w-full text-center text-5xl font-semibold leading-tight md:w-auto md:text-left">
                Education
              </h1>
              <div className="text-grey pl-8 text-lg">
                <h1 className="block w-16 h-auto text-secondary text-2xl sm:inline-block">
                  Major
                </h1>
                <span className="hidden mx-2 sm:inline-block"> - </span>
                <p className="inline-block p-4 sm:p-0">Computer Engineering</p>
              </div>
              <div className="text-grey pl-8 text-lg">
                <h1 className="block w-16 h-auto text-secondary text-2xl sm:inline-block">
                  Minor
                </h1>
                <span className="hidden mx-2 sm:inline-block"> - </span>
                <p className="inline-block p-4 sm:p-0">
                  Artificial Intelligence Engineering
                </p>
              </div>
              <div className="text-gradient-kmitl m-auto py-4 text-center text-6xl font-semibold tracking-wider uppercase">
                kmitl
              </div>
              <div className="w-full">
                <h1 className="text-kmitl w-full text-center font-semibold">
                  King Mongkut&#39;s institute of Technology Ladkrabang
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Screen>
      <div className="px-12 py-8 bg-white space-y-4 sm:py-24 sm:space-y-6 md:space-y-16">
        {experiencesList.map((item: IExperience, index: number) => (
          <Fragment key={index}>
            <Experience {...item} />
            {index !== experiencesList.length - 1 && width < lg && (
              <div className="w-full border-t border-light-gray" />
            )}
          </Fragment>
        ))}
      </div>
      <Footer />
    </Lending>
  );
};

export default Home;
