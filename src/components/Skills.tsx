import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'html5':
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path d="M4 2L5.8 19.8L12 22L18.2 19.8L20 2H4Z" fill="#E34F26" />
            <path d="M12 3.8V20.1L16.8 18.5L18.3 3.8H12Z" fill="#EF652A" />
            <path d="M12 7.7H8.5L8.7 10.1H12V12.5H8.9L9.2 15.6L12 16.4V18.7L7 17.3L6.3 5.4H17.7L17.5 7.7H12Z" fill="white" />
            <path d="M12 12.5H15.1L14.8 15.6L12 16.4V14.1L12 12.5ZM12 7.7V10.1H15.3L15.5 7.7H12Z" fill="#EBEBEB" />
          </svg>
        );
      case 'css3':
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path d="M4 2L5.8 19.8L12 22L18.2 19.8L20 2H4Z" fill="#1572B6" />
            <path d="M12 3.8V20.1L16.8 18.5L18.3 3.8H12Z" fill="#33A9DC" />
            <path d="M12 7.7H8.5L8.7 10.1H12V12.5H8.9L9.2 15.6L12 16.4V18.7L7 17.3L6.3 5.4H17.7L17.5 7.7H12Z" fill="white" />
            <path d="M12 12.5H15.1L14.8 15.6L12 16.4V14.1L12 12.5ZM12 7.7V10.1H15.3L15.5 7.7H12Z" fill="#EBEBEB" />
          </svg>
        );
      case 'javascript':
        return (
          <svg className="w-10 h-10 rounded-md overflow-hidden" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="#F7DF1E" />
            <path d="M7 16.5C7.5 17.4 8.3 18 9.5 18C10.8 18 11.7 17.2 11.7 15.7V9H9.8V15.7C9.8 16.4 9.4 16.7 8.9 16.7C8.4 16.7 8.1 16.4 7.8 15.8L7 16.5ZM13.8 16.3C14.3 17.3 15.3 18 16.8 18C18.4 18 19.5 17 19.5 15.4C19.5 13.9 18.6 13.3 17.1 12.6C16.1 12.1 15.6 11.8 15.6 11.1C15.6 10.5 16.1 10.1 16.7 10.1C17.3 10.1 17.7 10.4 18.1 11.1L19.2 10.3C18.5 9.3 17.6 8.8 16.7 8.8C15.2 8.8 14.1 9.8 14.1 11.2C14.1 12.6 15 13.2 16.3 13.8C17.4 14.3 18 14.7 18 15.5C18 16.2 17.4 16.7 16.7 16.7C15.8 16.7 15.2 16.2 14.8 15.4L13.8 16.3Z" fill="#000000" />
          </svg>
        );
      case 'react':
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#00D8FF" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
          </svg>
        );
      case 'figma':
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path d="M8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6H12V12H8Z" fill="#F24E1E" />
            <path d="M12 6H16C17.66 6 19 7.34 19 9C19 10.66 17.66 12 16 12H12V6Z" fill="#FF7262" />
            <path d="M12 12H16C17.66 12 19 13.34 19 15C19 16.66 17.66 18 16 18C14.34 18 13 16.66 13 15V12H12Z" fill="#1ABCFE" />
            <path d="M8 18C9.66 18 11 16.66 11 15V12H8C6.34 12 5 13.34 5 15C5 16.66 6.34 18 8 18Z" fill="#0ACF83" />
            <path d="M8 22C6.34 22 5 20.66 5 19C5 17.34 6.34 16 8 16C9.66 16 11 17.34 11 19C11 20.66 9.66 22 8 22Z" fill="#A259FF" />
          </svg>
        );
      default:
        return null;
    }
  };

  const featuredSkills = PORTFOLIO_CONFIG.skills.slice(0, 6);

  return (
    <div id="skills" className="w-full">
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>TECHNICAL STACK</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 items-center">
        {featuredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center p-3 rounded-xl bg-[#0b221a] border border-emerald-900/50 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all group"
          >
            <div className="h-12 w-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 mb-2">
              {getSkillIcon(skill.iconName)}
            </div>
            <span className="text-xs font-semibold text-emerald-100 group-hover:text-amber-300 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
