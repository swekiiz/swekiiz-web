import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';

import { FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import { Experience, IExperience } from 'components/card';
import { name, surname } from 'constants/name';

const Home: React.FC = (): JSX.Element => {
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
      <Screen className="flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-1/2">
            <h1 className="text-gradient px-16 text-left text-5xl font-semibold leading-tight">
              Hi, my name is <br />
              {name} {surname}
            </h1>
          </div>
          <div className="vertical-gradient" />
          <div className="w-1/2"></div>
        </div>
      </Screen>
      <Screen className="flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-1/2"></div>
          <div className="vertical-gradient" />
          <div className="flex w-1/2">
            <div className="flex flex-col items-start justify-start m-auto p-16 space-y-4">
              <h1 className="text-gradient text-left text-5xl font-semibold leading-tight">
                Education <br />
              </h1>
              <div className="text-grey pl-8 text-lg">
                <h1 className="inline-block w-16 h-auto text-secondary text-2xl">
                  Major
                </h1>
                <span className="mx-2"> - </span>
                <p className="inline-block">Computer Engineering</p>
              </div>
              <div className="text-grey pl-8 text-lg">
                <h1 className="inline-block w-16 h-auto text-secondary text-2xl">
                  Minor
                </h1>
                <span className="mx-2"> - </span>
                <p className="inline-block">
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
      <div className="px-12 py-24 bg-white space-y-16">
        {experiencesList.map((item: IExperience, key: number) => (
          <Experience key={key} {...item} />
        ))}
      </div>
      <div className="flex px-12 py-8 w-full bg-black">
        <div className="flex w-1/5">
          <h1 className="m-auto py-4 text-center text-white text-4xl font-normal">
            Contact me
          </h1>
        </div>
        <div className="flex flex-col w-4/5 space-y-4">
          <div className="ml-auto">
            <p className="inline-block align-middle text-right text-light-gray text-xl font-light">
              082-400-2211
            </p>
            <FiPhone className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
          </div>
          <div className="ml-auto">
            <p className="inline-block align-middle text-right text-light-gray text-xl font-light">
              best_n.dol@hotmail.com
            </p>
            <FiMail className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
          </div>
          <div className="ml-auto">
            <a href="https://github.com/swekiiz">
              <p className="inline-block align-middle text-right text-light-gray text-xl font-light">
                github.com/swekiiz
              </p>
              <div className="mark-img-github inline-block align-middle w-6 h-6 ml-4"></div>
            </a>
          </div>
        </div>
      </div>
    </Lending>
  );
};

export default Home;
