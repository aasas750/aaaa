import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Portfolio: React.FC = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity for a tech startup',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Secure mobile banking application',
      technologies: ['React Native', 'Firebase', 'Biometric Auth'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Analytics dashboard for SaaS platform',
      technologies: ['React', 'D3.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern restaurant website with online ordering',
      technologies: ['Next.js', 'Sanity CMS', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital marketing campaign for product launch',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Branding', 'Marketing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-turquoise">Portfolio</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-turquoise text-navy'
                  : isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              data-cursor-hover
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
              data-cursor-hover
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <div className="flex gap-3 mb-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-turquoise text-navy rounded-full hover:bg-turquoise/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-turquoise text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;