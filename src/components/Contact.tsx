'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

type SubmitStatus = 'success' | 'error' | null;

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

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
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.message || 'Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12 max-w-lg mx-auto"
                >
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 bg-[#333] text-white rounded-lg font-medium hover:bg-[#222] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center p-3 bg-green-50 text-green-700 rounded-lg"
                            >
                                Your message has been sent successfully!
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center p-3 bg-red-50 text-red-700 rounded-lg"
                            >
                                {errorMessage || 'There was an error sending your message. Please try again.'}
                            </motion.div>
                        )}
                    </form>
                </motion.div>

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