import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: '1',
      title: 'Understanding the Power of Number 7 in Numerology',
      excerpt: 'The number 7 is often associated with spirituality and introspection. Discover how it influences your life path...',
      date: 'Oct 12, 2023',
      author: 'Soumith',
      category: 'Numerology',
      image: 'https://picsum.photos/seed/num7/800/500'
    },
    {
      id: '2',
      title: 'Top 5 Tarot Spreads for Love and Relationships',
      excerpt: 'Are you seeking clarity in your love life? These 5 spreads will help you understand your partner better...',
      date: 'Oct 08, 2023',
      author: 'Soumith',
      category: 'Tarot',
      image: 'https://picsum.photos/seed/tarotlove/800/500'
    },
    {
      id: '3',
      title: 'How to Cleanse Your Space from Negative Energy',
      excerpt: 'Feeling heavy or stuck? Learn simple yet effective spiritual rituals to clear your home and mind...',
      date: 'Sep 28, 2023',
      author: 'Soumith',
      category: 'Remedies',
      image: 'https://picsum.photos/seed/cleanse/800/500'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 gold-text"
          >
            Spiritual Insights
          </motion.h1>
          <p className="text-purple-200/60 max-w-2xl mx-auto text-lg">
            Tips, guides, and wisdom on Tarot, Numerology, and living a spiritually aligned life.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-purple-100 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {['All', 'Tarot', 'Numerology', 'Remedies', 'Psychic'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-200 hover:border-amber-400 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-gray-900 text-xs font-bold">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-purple-200/40 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-purple-100 group-hover:text-amber-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-purple-200/60 mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-amber-400 font-medium group-hover:gap-4 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-amber-900/10 pointer-events-none"></div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-purple-100">Subscribe to Divine Wisdom</h2>
          <p className="text-purple-200/70 mb-8 max-w-xl mx-auto">
            Get weekly spiritual tips, tarot forecasts, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-[#0a051a] border border-white/10 rounded-xl px-6 py-4 text-purple-100 focus:outline-none focus:border-purple-500"
              required
            />
            <button type="submit" className="glass-button px-8 py-4 whitespace-nowrap">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
