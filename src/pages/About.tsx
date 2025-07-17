import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional results.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and bring it to life.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring quality and attention to detail.',
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We think outside the box to create unique and memorable digital experiences.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about creating digital experiences that make a difference.',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with expertise in modern web technologies.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'UX Designer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'User-centered design advocate with a focus on accessibility.',
    },
    {
      name: 'Emily Thompson',
      role: 'Marketing Strategist',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data-driven marketing expert with a passion for growth.',
    },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-turquoise">Skaynex</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We are a passionate team of digital innovators dedicated to creating exceptional 
              digital experiences that drive business growth and inspire audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Founded in 2020, Skaynex emerged from a simple belief: that every business deserves 
                a digital presence that truly represents their vision and values. We started as a 
                small team of passionate designers and developers, and have grown into a full-service 
                digital agency.
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Today, we work with startups, established businesses, and everything in between, 
                helping them navigate the digital landscape and achieve their goals through 
                innovative solutions and strategic thinking.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-turquoise to-blue-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-4">50+</div>
                <div className="text-xl">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-turquoise">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDark
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-turquoise'
                    : 'bg-white border border-gray-200 hover:border-turquoise hover:shadow-lg'
                }`}
                data-cursor-hover
              >
                <value.icon className="w-16 h-16 text-turquoise mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-turquoise">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDark ? 'text-white' : 'text-navy'
                }`}
                data-cursor-hover
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-turquoise font-medium mb-3">{member.role}</p>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-turquoise/10' : 'bg-turquoise/5'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-turquoise mb-2">{stat.number}</div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;