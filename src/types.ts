export type BlobParameterProps = {
    seed: number;
    size: number;
    edges: number;
    growth: number;
    name: string;
    colors: string[];
};

export type BlobProps = {
    svgPath: string;
    parameters: BlobParameterProps;
};

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string; // ISO date string
    updatedAt?: string; // ISO date string
    tags: string[];
    readTime: number; // estimated read time in minutes
    featured: boolean;
    status: 'published' | 'draft';
    author: {
        name: string;
        avatar?: string;
    };
}
