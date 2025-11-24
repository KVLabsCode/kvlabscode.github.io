import { CaseStudy } from '@/lib/case-studies';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
    return (
        <div className="glass-effect rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-white/20 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                caseStudy.type === 'publisher' 
                                    ? 'bg-primary-500/20' 
                                    : 'bg-accent-500/20'
                            }`}>
                                {caseStudy.type === 'publisher' ? (
                                    <svg className="w-6 h-6 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-accent-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="text-3xl font-bold text-white">{caseStudy.company}</h3>
                        </div>
                        <span className={`inline-block px-4 py-1.5 text-xs font-semibold rounded-full ${
                            caseStudy.type === 'publisher' 
                                ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30' 
                                : 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                        }`}>
                            {caseStudy.type === 'publisher' ? 'Publisher' : 'Advertiser'}
                        </span>
                    </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-5 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            Challenge
                        </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-5 bg-gradient-to-b from-accent-400 to-primary-400 rounded-full"></div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            Solution
                        </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-5 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                            Results
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {caseStudy.results.map((result, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl p-5 border border-white/10 group-hover:border-primary-500/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-full blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl font-bold gradient-text mb-2 leading-none">
                                        {result.metric}
                                    </div>
                                    <div className="text-base font-semibold text-white mb-2">
                                        {result.value}
                                    </div>
                                    <div className="text-sm text-gray-400 leading-relaxed">
                                        {result.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
