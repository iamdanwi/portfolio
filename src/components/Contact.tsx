'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

const socialLinks = [
    {
        name: 'Twitter',
        url: 'https://x.com/danwichoudhary',
        icon: FaXTwitter,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dainwi-choudhary-80612a325/',
        icon: FaLinkedin,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/iamdanwi',
        icon: FaGithub,
    },
];

const Contact = () => {

    return (
        <section id="contact" className="py-16 px-4 bg-gray-50">


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h2
                    initial={{ y: -20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold mb-8 font-[family-name:var(--font-lustria)] text-[#333]"
                >
                    Let&apos;s Connect
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 text-lg font-[family-name:var(--font-poppins)] text-[#222]"
                >
                    Feel free to reach out for collaborations or just a friendly hello
                </motion.p>

                {/* Contact Form */}


                <div className="flex justify-center gap-6">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-110"
                            >
                                <link.icon className="w-6 h-6 text-[#333]" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;