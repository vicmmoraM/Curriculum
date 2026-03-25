import { 
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiDjango, SiPython, SiPostman, SiMysql, SiMariadb, 
  SiPandas, SiNumpy, SiGithub, SiGitlab, SiDocker, SiPostgresql
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaJava, FaGitAlt, FaCode, FaTerminal } from "react-icons/fa";


export const tagIcons: Record<string, React.ReactNode> = {
  // Frontend
  'React': <SiReact className="text-[#61DAFB]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'HTML5': <SiHtml5 className="text-[#E34F26]" />,
  'CSS3': <SiCss className="text-[#1572B6]" />,
  
  // Backend & DB
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Django': <SiDjango className="text-[#092E20]" />,
  'Python': <SiPython className="text-[#3776AB]" />,
  'REST APIs': <SiPostman className="text-[#FF6C37]" />,
  'SQL Server': <DiMsqlServer className="text-[#CC2927]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'MariaDB': <SiMariadb className="text-[#003545]" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  
  // Data & Otros
  'Pandas': <SiPandas className="text-[#150458]" />,
  'Numpy': <SiNumpy className="text-[#013243]" />,
  'Java': <FaJava className="text-[#ED8B00]" />,
  
  // Tooling
  'Git': <FaGitAlt className="text-[#F05032]" />,
  'GitHub': <SiGithub />,
  'GitLab': <SiGitlab className="text-[#FC6D26]" />,
  'Docker': <SiDocker className="text-[#2496ED]" />,
  
  // Fallbacks
  'Desarrollo': <FaCode />,
  'Herramientas': <FaTerminal />,
};