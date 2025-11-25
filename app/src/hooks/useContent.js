import { useState, useEffect } from 'react';
import contentRaw from '../../../content.md?raw';

export const useContent = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const parseContent = () => {
            if (!contentRaw || contentRaw.trim() === '') {
                // Fallback content if file is empty
                const fallback = [
                    {
                        id: 'intro',
                        title: 'Welcome',
                        content: '# Welcome\n\nPlease add your content to `content.md` in the parent directory. Each section starting with a Level 1 Header (#) will become a new page.'
                    },
                    {
                        id: 'strategy',
                        title: 'Product Strategy',
                        content: '# Product Strategy\n\nThis is a placeholder for your strategy section.'
                    }
                ];
                setSections(fallback);
                setLoading(false);
                return;
            }

            // Split by Level 1 or 2 headers (# or ## at start of line)
            const rawSections = contentRaw.split(/(?=^#{1,2} )/gm);

            const parsed = rawSections
                .filter(section => section.trim().length > 0)
                .map((section, index) => {
                    // Extract title (remove markdown syntax)
                    const titleMatch = section.match(/^#{1,2} (.*$)/m);
                    // Remove bolding ** and escape characters \ from title
                    let title = titleMatch ? titleMatch[1] : `Section ${index + 1}`;
                    title = title.replace(/\*\*/g, '').replace(/\\/g, '');

                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

                    return {
                        id: id || `section-${index}`,
                        title,
                        content: section
                    };
                });

            setSections(parsed);
            setLoading(false);
        };

        parseContent();
    }, []);

    return { sections, loading };
};
