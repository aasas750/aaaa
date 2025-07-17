import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Code, Palette, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technology',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that convert visitors to customers',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Strategic digital marketing to grow your online presence',
    },
    {
      icon: Users,
      title: 'Branding',
      description: 'Complete brand identity that resonates with your audience',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Skaynex transformed our digital presence completely. The results exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Global Ventures',
      content: 'Professional, creative, and incredibly skilled. Our ROI increased by 300%.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      company: 'Creative Studio',
      content: 'The team at Skaynex brought our vision to life with stunning design and functionality.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Create the{' '}
            <span className="text-turquoise bg-gradient-to-r from-turquoise to-blue-400 bg-clip-text text-transparent">
              Digital Difference
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We craft exceptional digital experiences that transform businesses and captivate audiences
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-turquoise text-navy font-semibold rounded-full hover:bg-turquoise/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-turquoise/25"
            data-cursor-hover
          >
            Start Your Digital Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-turquoise">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDark
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-turquoise'
                    : 'bg-gray-50 border border-gray-200 hover:border-turquoise hover:shadow-lg'
                }`}
                data-cursor-hover
              >
                <service.icon className="w-12 h-12 text-turquoise mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-turquoise">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } transition-all duration-300 hover:scale-105 cursor-pointer`}
                data-cursor-hover
              >
                <div className="aspect-video bg-gradient-to-br from-turquoise to-blue-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Modern, scalable e-commerce solution with advanced features
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border-2 border-turquoise text-turquoise font-semibold rounded-full hover:bg-turquoise hover:text-navy transition-all duration-300"
              data-cursor-hover
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="text-turquoise">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
                    : 'bg-gray-50 border border-gray-200'
                }`}
                data-cursor-hover
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-turquoise text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-turquoise/10' : 'bg-turquoise/5'}`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's create something extraordinary together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-turquoise text-navy font-semibold rounded-full hover:bg-turquoise/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-turquoise/25"
            data-cursor-hover
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;