'use client';

import { useState } from 'react';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const industries = [
        'Mobile Gaming',
        'Social & Messaging',
        'Utilities & Productivity',
        'E-commerce & Shopping',
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

            // Handle industry field
            const industry = formData.get('industry') as string;
            params.append(`entry.${FIELD_IDS.industry}`, industry);

            params.append(`entry.${FIELD_IDS.userType}`, 'Publisher');

            // Submit to Google Forms using no-cors mode
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                body: params,
                mode: 'no-cors',
            });

            // If we get here, assume success (no-cors doesn't return response)
            setIsSubmitted(true);
            setSelectedIndustry('');

            // Track form submission with Umami
            if (typeof window !== 'undefined' && (window as any).umami) {
                (window as any).umami.track('form_submission', {
                    form_type: 'waitlist',
                    user_type: 'Publisher',
                    industry: formData.get('industry') as string,
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-8 h-8 text-emerald-600"
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 text-lg">
                    We've received your information. We'll notify you soon about early access to Kovio.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">
            {/* Form Header */}
            <div className="text-center pb-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Get Started Today</h3>
                <p className="text-gray-600">Fill out the form below to secure your spot</p>
            </div>

            {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                    {submitError}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Website */}
                <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Website *
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="https://example.com"
                    />
                </div>

                {/* Industry */}
                <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-2">
                        Industry *
                    </label>
                    <div className="relative">
                        <select
                            id="industry"
                            name="industry"
                            required
                            value={selectedIndustry}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                            onChange={(e) => {
                                setSelectedIndustry(e.target.value);
                            }}
                        >
                            <option value="">Select an industry</option>
                            {industries.map((industry) => (
                                <option key={industry} value={industry}>
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

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
                {isSubmitting ? 'Submitting...' : 'Request Access →'}
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center pt-2">
                By submitting this form, you agree to receive updates about Kovio. We respect your privacy.
            </p>
        </form>
    );
}
