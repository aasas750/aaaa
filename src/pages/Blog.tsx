import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Blog: React.FC = () => {
  const { isDark } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping the web development landscape and how they can benefit your business.',
      image: 'https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      category: 'Web Development',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Creating Accessible User Interfaces: A Complete Guide',
      excerpt: 'Learn how to design and develop inclusive digital experiences that work for everyone.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Rodriguez',
      date: 'March 10, 2024',
      category: 'UI/UX Design',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'SEO Strategies That Actually Work in 2024',
      excerpt: 'Proven SEO techniques to improve your website rankings and drive organic traffic.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Thompson',
      date: 'March 8, 2024',
      category: 'SEO',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'The Psychology of Color in Digital Design',
      excerpt: 'How color choices impact user behavior and brand perception in digital products.',
      image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Alex Johnson',
      date: 'March 5, 2024',
      category: 'Design',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for creating maintainable and scalable React applications.',
      image: 'https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Chen',
      date: 'March 1, 2024',
      category: 'Development',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'The Rise of Voice User Interfaces',
      excerpt: 'Exploring the growing importance of voice interfaces in modern digital experiences.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Rodriguez',
      date: 'February 28, 2024',
      category: 'Innovation',
      readTime: '5 min read',
    },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-turquoise">Blog</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay updated with the latest trends, insights, and best practices in digital design and development
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-turquoise text-navy px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-turquoise text-sm font-medium">{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {blogPosts[0].excerpt}
              </p>
              <div className={`flex items-center gap-4 mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                </div>
                <span className="text-sm">{blogPosts[0].readTime}</span>
              </div>
              <button
                className="inline-flex items-center text-turquoise hover:text-turquoise/80 font-semibold transition-colors"
                data-cursor-hover
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
              data-cursor-hover
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-turquoise text-sm font-medium">{post.category}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    • {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                <div className={`flex items-center gap-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${isDark ? 'bg-turquoise/10' : 'bg-turquoise/5'}`}>
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-turquoise ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <button
              className="px-6 py-3 bg-turquoise text-navy font-semibold rounded-lg hover:bg-turquoise/90 transition-colors"
              data-cursor-hover
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;