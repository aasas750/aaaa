import React from 'react';
import { Code, Palette, TrendingUp, Users, Smartphone, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technology stack',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that convert visitors to customers',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Strategic digital marketing to grow your online presence',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
    },
    {
      icon: Users,
      title: 'Branding',
      description: 'Complete brand identity that resonates with your audience',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Development', 'Android Development', 'React Native', 'App Store Launch'],
    },
    {
      icon: Search,
      title: 'Content Creation',
      description: 'Engaging content that drives results and builds your brand',
      features: ['Copywriting', 'Video Production', 'Photography', 'Content Strategy'],
    },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-turquoise">Services</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-turquoise'
                  : 'bg-gray-50 border border-gray-200 hover:border-turquoise hover:shadow-lg'
              }`}
              data-cursor-hover
            >
              <service.icon className="w-16 h-16 text-turquoise mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <div className="w-2 h-2 bg-turquoise rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`py-16 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'} rounded-3xl`}>
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="text-turquoise">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your goals and requirements' },
                { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan' },
                { step: '03', title: 'Design', description: 'We create beautiful, functional designs' },
                { step: '04', title: 'Launch', description: 'We deliver and support your project' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-bold text-turquoise mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;