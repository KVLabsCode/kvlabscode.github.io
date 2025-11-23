import { CaseStudy } from '@/lib/case-studies';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
    return (
        <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{caseStudy.company}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/20 text-primary-400">
                        {caseStudy.type === 'publisher' ? 'Publisher' : 'Advertiser'}
                    </span>
                </div>
            </div>

            {/* Challenge */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Challenge
                </h4>
                <p className="text-gray-300">{caseStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Solution
                </h4>
                <p className="text-gray-300">{caseStudy.solution}</p>
            </div>

            {/* Results */}
            <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                    Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, index) => (
                        <div
                            key={index}
                            className="bg-white/5 rounded-lg p-4 border border-white/10 group-hover:border-primary-500/50 transition-colors"
                        >
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {result.metric}
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">
                                {result.value}
                            </div>
                            <div className="text-xs text-gray-400">
                                {result.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
