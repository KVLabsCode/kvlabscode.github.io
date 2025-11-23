'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function WaitlistForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        industry: '',
        customIndustry: '',
        userType: 'publisher',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const industries = [
        'Technology',
        'E-commerce',
        'Healthcare',
        'Finance',
        'Education',
        'Media & Entertainment',
        'Other',
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.website.trim()) newErrors.website = 'Website is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (formData.industry === 'Other' && !formData.customIndustry.trim()) {
            newErrors.customIndustry = 'Please specify your industry';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Here you would typically send data to your backend
            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    website: '',
                    industry: '',
                    customIndustry: '',
                    userType: 'publisher',
                });
            }, 5000);
        }
    };

    if (isSubmitted) {
        return (
            <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">
                    We've received your information. We'll notify you soon about early access to AdInfra AI.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={clsx(
                            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all',
                            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-500'
                        )}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={clsx(
                            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all',
                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-500'
                        )}
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Website */}
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                        Website *
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={clsx(
                            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all',
                            errors.website ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-500'
                        )}
                        placeholder="https://example.com"
                    />
                    {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
                </div>

                {/* Industry */}
                <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                        Industry *
                    </label>
                    <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={clsx(
                            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all',
                            errors.industry ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-500'
                        )}
                    >
                        <option value="" className="bg-gray-900">Select an industry</option>
                        {industries.map((industry) => (
                            <option key={industry} value={industry} className="bg-gray-900">
                                {industry}
                            </option>
                        ))}
                    </select>
                    {errors.industry && <p className="mt-1 text-sm text-red-500">{errors.industry}</p>}
                </div>
            </div>

            {/* Custom Industry (shown when "Other" is selected) */}
            {formData.industry === 'Other' && (
                <div className="animate-slide-up">
                    <label htmlFor="customIndustry" className="block text-sm font-medium text-gray-300 mb-2">
                        Please specify your industry *
                    </label>
                    <input
                        type="text"
                        id="customIndustry"
                        name="customIndustry"
                        value={formData.customIndustry}
                        onChange={handleChange}
                        className={clsx(
                            'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all',
                            errors.customIndustry ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-500'
                        )}
                        placeholder="Enter your industry"
                    />
                    {errors.customIndustry && <p className="mt-1 text-sm text-red-500">{errors.customIndustry}</p>}
                </div>
            )}

            {/* User Type */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                    I am a *
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="userType"
                            value="publisher"
                            checked={formData.userType === 'publisher'}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-white">Publisher</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="userType"
                            value="advertiser"
                            checked={formData.userType === 'advertiser'}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-white">Advertiser</span>
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
            >
                Join Waitlist
            </button>
        </form>
    );
}
