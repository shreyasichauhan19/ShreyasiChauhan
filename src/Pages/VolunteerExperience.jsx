// VolunteerExperience.jsx
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import VolunteerExperienceItem from '../Components/VolunteerExperienceItem';

const VolunteerExperience = () => {
  const volunteerExperienceData = [
    {
      title: 'Hackathon Judge - Hack Your Skills 2023',
      content: 'As a panel judge for the annual hackathon hosted by the Girls in Tech Club at UBC Okanagan, I evaluated submissions from participating teams based on various criteria, such as creativity, technical difficulty, feasibility, and impact. The event was focused on empowering first-time hackers. I provided feedback and advice to the teams and collaborated with other judges to select the winners of the hackathon.',
    },
    {
      title: 'Hackathon Judge - BC Hacks 2023',
      content: 'I collaborated with a distinguished panel of five judges, which included computer science professors Dr. Firas Moosvi and Dr. Ramon Lawrence. Together, we evaluated over 20 projects to determine the top three winners. Our evaluation was comprehensive, and we meticulously scrutinized each entry\'s creativity, technical difficulty, feasibility, and impact against pre-defined criteria. Fun fact: I was on the BC Hacks organizing team for its first 4 iterations. ',
    },
    {
      title: 'Panel Member - Co-op Education Program Webinar',
      content: 'I was invited to share my Co-op experience with 200+ students for a webinar hosted by the UBC Coop Office, aimed at equipping the 2021 co-op batch with the necessary tools and strategies to navigate the highly competitive job market. I spoke about job search best practices, along with some insights drawn from my own professional experience. Through a thoughtful and engaging discourse, I effectively shared some crucial dos and don\'ts of job search to make the process a tad easier. The webinar was followed by a Q/A session where I answered job hunt questions specific to computer science.',
    },
    {
        title: 'Outreach Manager - UBCO Student Union Elections',
        content: 'As the Campaign Manager for the Vice President External candidate in the 2023-24 Student Union elections at UBC, I was responsible for formulating and executing effective strategies to increase student engagement and participation in the electoral process. The candidate Lakshay Karnwal emerged victorious with an impressive tally of 420 votes, marking a 30% increase in voter turnout compared to the previous year.',
    },
    {
    title: 'Volunteer - UBCO Homecoming 2018',
    content: 'Volunteered with the UBCO Alumni Office to help out on day-of activities such as entertainment, food, and general logistics of the Annual Homecoming event which aims at bringing together and celebrating the exceptional alumni of our beautiful campus.',
    },
    {
        title: 'Volunteer - UBCO Homecoming 2019',
        content: 'Same thing, once again! :) ',
        },
    // Add more volunteer experience data as needed
  ];

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[80%] mt-[0.1%] mb-[10%] ">
        <div className="w-[80%] h-[20%] mt-[10%] mb-[6%]">
          <SectionTitle title="VOLUNTEER EXPERIENCE" subtitle="Other stuff that I do" />
        </div>
        <div id="accordionExample">
          {volunteerExperienceData.map((experience, index) => (
            <VolunteerExperienceItem
              key={index}
              title={experience.title}
              content={experience.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerExperience;
