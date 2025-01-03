import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sachin Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Visionary leader with expertise in cloud solutions and cybersecurity',
    social: {
      linkedin: 'https://www.linkedin.com/in/sachinsharma1812/',
      github: 'https://github.com/sachinsharma1812',
      twitter: '#'
    }
  },
  {
    name: 'Rahul Kumar',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in cloud architecture and DevSecOps practices',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Priya Patel',
    role: 'Security Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Specialized in application security and penetration testing',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Amit Singh',
    role: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in AWS, Azure, and multi-cloud architectures',
    social: {
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Neha Gupta',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=400',
    bio: 'Specializing in CI/CD pipelines and automation',
    social: {
      linkedin: '#',
      github: '#'
    }
  }
];

function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our expert team brings together years of experience in cloud security, DevOps, and cybersecurity solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-700"
            >
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
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
