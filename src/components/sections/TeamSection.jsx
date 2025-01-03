import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from '../../../data/teamData';
import { SectionTitle } from '../../common/SectionTitle';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Our Team"
          subtitle="Our expert team brings together years of experience in cloud security, DevOps, and cybersecurity solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
