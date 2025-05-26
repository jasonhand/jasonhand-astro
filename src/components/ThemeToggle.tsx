import { useState, useEffect } from 'react';

type Theme = 'candycode' | 'ocean' | 'sunset' | 'forest';

interface ThemeConfig {
  name: string;
  icon: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const themes: Record<Theme, ThemeConfig> = {
  candycode: {
    name: 'Candycode',
    icon: '🍭',
    colors: {
      primary: '#ff6b9d',
      secondary: '#4ecdc4',
      accent: '#ffe66d'
    }
  },
  ocean: {
    name: 'Ocean',
    icon: '🌊',
    colors: {
      primary: '#0077be',
      secondary: '#00a8cc',
      accent: '#40e0d0'
    }
  },
  sunset: {
    name: 'Sunset',
    icon: '🌅',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ffcc02'
    }
  },
  forest: {
    name: 'Forest',
    icon: '🌲',
    colors: {
      primary: '#2d5016',
      secondary: '#4a7c59',
      accent: '#7fb069'
    }
  }
};

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('candycode');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    const themeConfig = themes[theme];
    
    root.style.setProperty('--color-primary', themeConfig.colors.primary);
    root.style.setProperty('--color-secondary', themeConfig.colors.secondary);
    root.style.setProperty('--color-accent', themeConfig.colors.accent);
    
    // Update gradients
    root.style.setProperty(
      '--gradient-primary', 
      `linear-gradient(135deg, ${themeConfig.colors.primary} 0%, ${themeConfig.colors.secondary} 100%)`
    );
    root.style.setProperty(
      '--gradient-secondary', 
      `linear-gradient(135deg, ${themeConfig.colors.secondary} 0%, ${themeConfig.colors.accent} 100%)`
    );
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors"
        aria-label="Change theme"
      >
        <span className="text-lg">{themes[currentTheme].icon}</span>
        <span className="hidden sm:inline text-sm">{themes[currentTheme].name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-surface border border-gray-700 rounded-lg shadow-lg z-50 min-w-[150px]">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => handleThemeChange(key as Theme)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentTheme === key ? 'bg-gray-700' : ''
              }`}
            >
              <span className="text-lg">{theme.icon}</span>
              <div>
                <div className="text-sm font-medium">{theme.name}</div>
                <div className="flex gap-1 mt-1">
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-600" 
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-600" 
                    style={{ backgroundColor: theme.colors.secondary }}
                  />
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-600" 
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 