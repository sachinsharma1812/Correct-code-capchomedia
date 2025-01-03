import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SocialLink } from './SocialLink';

const TeamCard = ({ member }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-700">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
        <p className="text-purple-400 font-medium mb-2">{member.role}</p>
        <p className="text-gray-300 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          <SocialLink href={member.social.linkedin} icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href={member.social.twitter} icon={<Twitter className="w-5 h-5" />} />
          <SocialLink href={member.social.github} icon={<Github className="w-5 h-5" />} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
