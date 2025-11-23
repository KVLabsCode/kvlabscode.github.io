'use client';

import { useState } from 'react';
import clsx from 'clsx';

// Google Form configuration
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdVGJ8LOkIOqKntYJaSWxv_yOlkK0TK40kpu9-46xMqK5TQjg/formResponse';
const FIELD_IDS = {
    name: '1374535330',
    email: '39028199',
    website: '1969265453',
    industry: '509278314',
    userType: '1691041121',
};

export default function WaitlistForm() {
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [customIndustry, setCustomIndustry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const industries = [
        'Technology',
        'E-commerce',
        'Healthcare',
        'Finance',
        'Education',
        'Media & Entertainment',
        'Other',
    ];

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const formData = new FormData(e.currentTarget);

            // Create URLSearchParams for Google Forms submission
            const params = new URLSearchParams();
            params.append(`entry.${FIELD_IDS.name}`, formData.get('name') as string);
            params.append(`entry.${FIELD_IDS.email}`, formData.get('email') as string);
            params.append(`entry.${FIELD_IDS.website}`, formData.get('website') as string);

            // Handle industry field - append custom industry if "Other" is selected
            const industry = formData.get('industry') as string;
            if (industry === 'Other' && customIndustry) {
                params.append(`entry.${FIELD_IDS.industry}`, `Other: ${customIndustry}`);
            } else {
                params.append(`entry.${FIELD_IDS.industry}`, industry);
            }

            params.append(`entry.${FIELD_IDS.userType}`, formData.get('userType') as string);

            // Submit to Google Forms using no-cors mode
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                body: params,
                mode: 'no-cors',
            });

            // If we get here, assume success (no-cors doesn't return response)
            setIsSubmitted(true);
            setCustomIndustry('');
            setSelectedIndustry('');
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
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
        <form onSubmit={onSubmit} className="glass-effect rounded-2xl p-8 md:p-10 space-y-8 shadow-2xl">
            {/* Form Header */}
            <div className="text-center pb-4 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
                <p className="text-gray-400">Fill out the form below to secure your spot</p>
            </div>

            {submitError && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400 text-sm">
                    {submitError}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2.5">
                        Full Name *
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-200 hover:bg-white/10"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2.5">
                        Email Address *
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-200 hover:bg-white/10"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                {/* Website */}
                <div className="group">
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-2.5">
                        Company Website *
                    </label>
                    <div className="relative">
                        <input
                            type="url"
                            id="website"
                            name="website"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-200 hover:bg-white/10"
                            placeholder="https://example.com"
                        />
                    </div>
                </div>

                {/* Industry */}
                <div className="group">
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-300 mb-2.5">
                        Industry *
                    </label>
                    <div className="relative">
                        <select
                            id="industry"
                            name="industry"
                            required
                            value={selectedIndustry}
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-200 hover:bg-white/10 cursor-pointer appearance-none"
                            onChange={(e) => {
                                setSelectedIndustry(e.target.value);
                                if (e.target.value !== 'Other') {
                                    setCustomIndustry('');
                                }
                            }}
                        >
                            <option value="" className="bg-gray-900">Select an industry</option>
                            {industries.map((industry) => (
                                <option key={industry} value={industry} className="bg-gray-900">
                                    {industry}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Industry (shown when "Other" is selected) */}
            {selectedIndustry === 'Other' && (
                <div className="animate-slide-up group">
                    <label htmlFor="customIndustry" className="block text-sm font-semibold text-gray-300 mb-2.5">
                        Please specify your industry *
                    </label>
                    <input
                        type="text"
                        id="customIndustry"
                        value={customIndustry}
                        onChange={(e) => setCustomIndustry(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-200 hover:bg-white/10"
                        placeholder="Enter your industry"
                    />
                </div>
            )}

            {/* User Type */}
            <div className="pt-4">
                <label className="block text-sm font-semibold text-gray-300 mb-4">
                    I am a *
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <label className="relative flex items-center justify-center p-4 rounded-xl border-2 border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer transition-all duration-200 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-500/10">
                        <input
                            type="radio"
                            name="userType"
                            value="Publisher"
                            defaultChecked
                            className="sr-only peer"
                        />
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-primary-500 peer-checked:bg-primary-500">
                                <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                            </div>
                            <span className="text-white font-medium">Publisher</span>
                        </div>
                    </label>

                    <label className="relative flex items-center justify-center p-4 rounded-xl border-2 border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer transition-all duration-200 has-[:checked]:border-accent-500 has-[:checked]:bg-accent-500/10">
                        <input
                            type="radio"
                            name="userType"
                            value="Advertiser"
                            className="sr-only peer"
                        />
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-500 flex items-center justify-center transition-all peer-checked:border-accent-500 peer-checked:bg-accent-500">
                                <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                            </div>
                            <span className="text-white font-medium">Advertiser</span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 font-semibold shadow-lg hover:shadow-primary-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    {!isSubmitting && (
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    )}
                </span>
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center pt-2">
                By submitting this form, you agree to receive updates about AdInfra AI. We respect your privacy and will never share your information.
            </p>
        </form>
    );
}
