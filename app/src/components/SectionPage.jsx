import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import {
    Target,
    ChartPie,
    Rocket,
    CheckCircle,
    Lightbulb,
    Zap,
    BookOpen,
    ChevronRight
} from 'lucide-react';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4
};

// Map section IDs to Icons
const getIcon = (id) => {
    if (id.includes('position')) return <Target size={48} color="#94a3fe" strokeWidth={2.5} />;
    if (id.includes('market') || id.includes('sizing')) return <ChartPie size={48} color="#94a3fe" strokeWidth={2.5} />;
    if (id.includes('gtm') || id.includes('go-to-market')) return <Rocket size={48} color="#94a3fe" strokeWidth={2.5} />;
    if (id.includes('summary') || id.includes('checklist')) return <CheckCircle size={48} color="#94a3fe" strokeWidth={2.5} />;
    if (id.includes('intro') || id.includes('welcome')) return <Zap size={48} color="#94a3fe" strokeWidth={2.5} />;

    return <Lightbulb size={48} color="#94a3fe" strokeWidth={2.5} />;
};

const SectionPage = ({ section, prevSection, nextSection, isHero }) => {
    // Scroll to top on section change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [section.id]);

    const Icon = getIcon(section.id);

    // Custom renderer to inject icon before H1/H2
    const components = {
        h1: ({ node, ...props }) => (
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: isHero ? '1rem' : '2rem' }}>
                    {isHero ? null : Icon}
                    <h1 style={{ marginBottom: 0 }} {...props} />
                </div>
                {isHero && (
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#6b7280',
                        fontWeight: 500,
                        marginTop: '0.5rem',
                        marginLeft: 0,
                        maxWidth: '100%',
                        overflowWrap: 'break-word',
                        wordWrap: 'break-word'
                    }}>
                        by Sophia Ahuoyiza Abubakar, November 2025
                    </p>
                )}
            </div>
        ),
        h2: ({ node, ...props }) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '4rem', marginBottom: '1rem' }}>
                <h2 style={{ marginTop: 0 }} {...props} />
            </div>
        )
    };

    return (
        <div className={isHero ? 'hero-wrapper' : 'page-wrapper'}>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="container"
                style={{
                    paddingTop: isHero ? 0 : '4rem',
                    paddingBottom: '6rem',
                    position: 'relative'
                }}
            >
                <div
                    className={isHero ? "markdown-content hero-content" : "card markdown-content"}
                    style={{
                        zIndex: 1,
                        position: 'relative'
                    }}
                >
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        components={components}
                    >
                        {section.content}
                    </Markdown>
                </div>

                {isHero ? (
                    <div style={{
                        position: 'absolute',
                        right: '4rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10
                    }}
                        className="hero-arrow-container">
                        <Link to={`/${nextSection.id}`} className="arrow-button">
                            <ChevronRight size={64} strokeWidth={3} />
                        </Link>
                    </div>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '3rem',
                        gap: '2rem',
                        zIndex: 1,
                        position: 'relative',
                        flexWrap: 'wrap'
                    }}>
                        {prevSection ? (
                            <Link to={`/${prevSection.id}`} className="btn btn-secondary">
                                ← {prevSection.title}
                            </Link>
                        ) : (
                            <div style={{ flex: 1 }} />
                        )}

                        {nextSection ? (
                            <Link to={`/${nextSection.id}`} className="btn btn-primary">
                                {nextSection.title} →
                            </Link>
                        ) : (
                            <div style={{ flex: 1 }} />
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default SectionPage;
