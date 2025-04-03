'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
    CalendarDays,
    Clock,
    MessageCircle,
    ThumbsUp,
    ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

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

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get('https://dev.to/api/articles', {
                    params: {
                        username: 'dainwi',
                        per_page: 30, // Fetch more posts
                    },
                    headers: {
                        Accept: 'application/json',
                    },
                });
                // Sort posts by date (newest first)
                const sortedPosts = data.sort(
                    (a: BlogPost, b: BlogPost) =>
                        new Date(b.published_at).getTime() -
                        new Date(a.published_at).getTime()
                );
                setPosts(sortedPosts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Navbar />
            <main className="pt-28 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 flex items-center justify-between">
                        <Link href="/">
                            <Button variant="ghost" className="gap-2 cursor-pointer">
                                <ArrowLeft size={20} />
                                Back to Home
                            </Button>
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-semibold font-[family-name:var(--font-lustria)] text-[#333]">
                            All Blog Posts
                        </h1>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map(n => (
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    )}
                </div>
            </main>
        </>
    );
}
