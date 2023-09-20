import React from 'react';

const WorkExperience = () => {
  return (
    <div className="w-[80%] flex justify-center">
    <div className="w-[80%] mt-10 mb-10 ">
      <h3 className="mb-6 mt-10 text-5xl font-bold text-primary-900 dark:text-neutral-300">
        Work Experience
      </h3>
      <ol className="border-l-2 border-info-100">
      <li>
          <div className="flex-start md:flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 ml-6 block max-w-2xl rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  Hackathon Coach
                </a>
                <a
                  href="https://mlh.io/"
                  className="text-l text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  Major League Hacking
                </a>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
              Mentored and supported 25+ hackathons around the world.
              Conducted regular technical workshops on topics like - Github, Data Visualization, and Building a full-stack application.
              Worked with 3000+ hackers in less than 7 months. Judged 700+ technical hackathon projects. Successfully supported organizers of 5 hackathons to eliminate budgetary, logistical, and planning constraints. Providing expertise to help organize a seamless event.
              Acting as a link between MLH, organizers, attendees, and sponsors and maintaining clear communication with all parties throughout the process.
              </p>

              <a
                  href="#!"
                  className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  August 2022 - Present
                </a>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start md:flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mb-10 ml-6 block max-w-2xl rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                 Software Engineer (Co-op)
                </a>
                <a
                  href="https://www.cisco.com/site/ca/en/index.html?team=digital_marketing&medium=paid_search&campaign=campaign_independent&ccid=cc003683&dtid=pseggl000015&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBZMkNWmfzi7Ot9Pa__jDzTc8csM_5Q7qyExAn8adoXBmkc1MeAqqMxoCLuoQAvD_BwE&gclsrc=aw.ds"
                  className="text-l text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  Cisco
                </a>
              </div>
              <p className="mb-6 text-neutral-700 dark:text-neutral-200">
              Optimized internal API with 400k+ calls, resolving a critical timeout bug. Adjusted timeout values for Apache Cassandra, ElasticSearch, MongoDB, and Redis to optimal values.
              Updated 10+ projects to use the latest version of JRuby (+ dependencies) ensuring the team is using the updated version and making their workflow seamless
              Collaborated with the team to investigate and resolve jar file compatibility issues caused by upgrading to Gradle v7.4. Fixed the bug by replacing Grubbyjar with Warble.
              Created, tested, and added an additional Flink cluster to reduce the load on the existing 4. Used Apache ZooKeeper to ensure the Task and Job Managers were communicating with each other.
              </p>

              <a
                  href="#!"
                  className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                >
                  May 2021 - September 2022
                </a>

            </div>
          </div>
        </li>

      </ol>
    </div>
    </div>
  );
};

export default WorkExperience;
