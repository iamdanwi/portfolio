'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, MessageCircle, ThumbsUp } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string;
  reading_time_minutes: number;
  published_at: string;
  comments_count: number;
  positive_reactions_count: number;
  tag_list: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('https://dev.to/api/articles', {
        params: {
          username: 'dainwi',
          per_page: 3,
        },
        headers: {
          Accept: 'application/json',
        },
      });
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="blogs" className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-center mb-12 font-[family-name:var(--font-lustria)] text-[#333]"
        >
          Latest Blog Posts
        </motion.h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(n => (
              <div
                key={n}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.cover_image || post.social_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-lustria)] text-[#333] line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tag_list.map(tag => (
                          <Badge
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          <span>
                            {new Date(post.published_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.reading_time_minutes} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          <span>{post.comments_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={14} />
                          <span>{post.positive_reactions_count}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-50 text-[#333] border-gray-200 cursor-pointer"
                >
                  View All Posts
                </Button>
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Blog;
