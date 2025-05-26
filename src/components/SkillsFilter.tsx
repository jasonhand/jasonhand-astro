import { useState } from 'react';

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'technical' | 'soft' | 'leadership';
  gradient: 'gradient-text' | 'gradient-text-secondary';
}

const skills: Skill[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'React, Astro, TypeScript, Tailwind CSS, Next.js',
    icon: '⚡',
    category: 'technical',
    gradient: 'gradient-text'
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Node.js, Python, APIs, Databases, Cloud Services',
    icon: '🚀',
    category: 'technical',
    gradient: 'gradient-text-secondary'
  },
  {
    id: 'design',
    title: 'Design',
    description: 'UI/UX, Figma, Design Systems, User Experience',
    icon: '🎨',
    category: 'technical',
    gradient: 'gradient-text'
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'CI/CD, Docker, Kubernetes, Infrastructure as Code',
    icon: '⚙️',
    category: 'technical',
    gradient: 'gradient-text-secondary'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Machine Learning, LLMs, AI Tools, Automation',
    icon: '🤖',
    category: 'technical',
    gradient: 'gradient-text'
  },
  {
    id: 'sre',
    title: 'Site Reliability Engineering',
    description: 'Monitoring, Observability, Incident Response, SLOs',
    icon: '🔧',
    category: 'technical',
    gradient: 'gradient-text-secondary'
  },
  {
    id: 'devrel',
    title: 'Developer Relations',
    description: 'Community Building, Technical Advocacy, Content Creation',
    icon: '👥',
    category: 'soft',
    gradient: 'gradient-text'
  },
  {
    id: 'speaking',
    title: 'Public Speaking',
    description: 'Conference Talks, Workshops, Technical Presentations',
    icon: '🎤',
    category: 'leadership',
    gradient: 'gradient-text-secondary'
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    description: 'Career Guidance, Technical Coaching, Knowledge Sharing',
    icon: '🌱',
    category: 'leadership',
    gradient: 'gradient-text'
  }
];

export default function SkillsFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="mb-8">
        <span className="scattered-letters">
          <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span>
        </span>
      </h2>
      
      {/* Filter Controls */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 bg-surface border border-gray-700 rounded-lg text-text focus:border-primary focus:outline-none"
        />
        
        <div className="flex gap-2">
          {['all', 'technical', 'soft', 'leadership'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-muted hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="project-card">
            <div className={`text-4xl mb-4 ${skill.gradient}`}>{skill.icon}</div>
            <h3 className={`mb-4 ${skill.gradient}`}>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <p className="text-text-muted mt-8">No skills found matching your criteria.</p>
      )}
    </div>
  );
} 