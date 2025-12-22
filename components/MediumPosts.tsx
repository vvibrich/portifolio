import React, { useEffect, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink, BookOpen } from 'lucide-react';
import { getMediumPosts, MediumPost } from '../utils/medium';

const MediumPostCard: React.FC<{ post: MediumPost }> = ({ post }) => {
    const [imgError, setImgError] = useState(false);
    // Extract a snippet of the description without HTML tags
    const cleanDescription = post.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

    // Attempt to find an image source
    const imgSrc = post.thumbnail || post.description.match(/src="([^"]+)"/)?.[1];

    return (
        <div className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 flex flex-col h-full">
            <div className={`h-48 overflow-hidden relative ${!imgSrc || imgError ? 'bg-slate-800 flex items-center justify-center' : ''}`}>
                {!imgError && imgSrc ? (
                    <img
                        src={imgSrc}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-slate-600 group-hover:text-primary-500/50 transition-colors">
                        <BookOpen size={48} />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-400 border border-primary-900/30 bg-primary-900/10 px-2 py-0.5 rounded">
                        {new Date(post.pubDate).toLocaleDateString('pt-BR')}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-50 group-hover:text-primary-400 transition-colors mb-3">
                    {post.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow text-sm">
                    {cleanDescription}
                </p>

                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mt-auto"
                >
                    Ler no Medium <ExternalLink size={14} className="ml-1" />
                </a>
            </div>
        </div>
    );
};

const MediumPosts: React.FC = () => {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getMediumPosts();
            setPosts(data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section id="blog" className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading subtitle="Artigos">Minhas Publicações</SectionHeading>
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                    </div>
                </div>
            </section>
        )
    }

    if (posts.length === 0) return null;

    const displayedPosts = showAll ? posts : posts.slice(0, 3);
    const hasMorePosts = posts.length > 3;

    return (
        <section id="blog" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading subtitle="Blog">Minhas Publicações Recentes</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedPosts.map((post) => (
                        <MediumPostCard key={post.guid} post={post} />
                    ))}
                </div>

                <div className="mt-12 text-center flex flex-col md:flex-row justify-center gap-4">
                    {hasMorePosts && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all shadow-lg"
                        >
                            {showAll ? 'Ver menos artigos' : 'Ver mais artigos'}
                        </button>
                    )}

                    <a
                        href="https://medium.com/@viniciusvibrich/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30"
                    >
                        Visitar Medium <BookOpen size={18} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MediumPosts;
