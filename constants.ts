import { Experience, Project, SkillCategory, SocialLink } from './types';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const PROFILE = {
  name: "Vinicius Vibrich",
  role: "Engenheiro de Software Sênior",
  headline: "Transformando desafios complexos em soluções digitais de alto impacto.",
  summary: "Especialista em criar experiências mobile e web performáticas e escaláveis.",
  location: "Alvorada – RS",
  email: "vibrichdev@gmail.com",
};

export const ABOUT_TEXT = `Engenheiro de Software Sênior com forte atuação em React Native, Next.js, React e TypeScript. 
Possuo sólida experiência em arquitetura de software, liderança técnica e todo o ciclo de vida de desenvolvimento, desde a concepção até a publicação de aplicativos na App Store e Google Play.
Tenho expertise em integração de SDKs complexos e APIs REST/GraphQL.
Meu perfil é analítico e comunicativo, sempre focado em gerar valor real e lucro para o negócio através da tecnologia.`;

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: ["React Native", "Expo", "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Shadcn UI", "Styled Components"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP (Laravel)", "Ruby on Rails", "Python (Django/Flask)"]
  },
  {
    title: "Arquitetura & Padrões",
    skills: ["Clean Architecture", "MVVM", "DDD", "SOLID"]
  },
  {
    title: "DevOps & Infra",
    skills: ["CI/CD", "Jenkins", "Git", "Vercel", "AWS", "Firebase"]
  }
];

export const SOFT_SKILLS = [
  "Liderança técnica",
  "Comunicação assertiva",
  "Pensamento analítico",
  "Atenção aos detalhes",
  "Criatividade",
  "Trabalho em equipe",
  "Aprendizado contínuo"
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Ioasys",
    role: "Engenheiro de Software",
    period: "2024 – Atual",
    description: "Desenvolvimento de projetos web e mobile de alta complexidade utilizando Next.js e React. Atuação direta com grandes clientes como CVC e AECOM, incluindo o desenvolvimento de um sistema estratégico de créditos de carbono para a COP30."
  },
  {
    company: "VilaApps",
    role: "Desenvolvedor Fullstack Sênior",
    period: "2022 – 2024",
    description: "Liderança e desenvolvimento de projetos críticos para clientes como Dry Telecom, Vale, Proatas, Loga e Telerisco. Foco em entregas robustas e escaláveis."
  },
  {
    company: "Quiq S.A",
    role: "Desenvolvedor Frontend",
    period: "2022",
    description: "Implementação de arquitetura de micro frontends, utilizando React e TypeScript, com pipelines de CI/CD automatizados para garantir agilidade e qualidade."
  },
  {
    company: "Garupa App",
    role: "Desenvolvedor Fullstack",
    period: "2018 – 2021",
    description: "Atuação no core do negócio: App do passageiro, sistemas de backoffice administrativo e manutenção do site institucional."
  }
];

export const PROJECTS_PROFESSIONAL: Project[] = [
  {
    name: "Garupa App",
    description: "Aplicativo de mobilidade urbana brasileiro.",
    technologies: ["Mobile", "React Native"],
    link: "https://apps.apple.com/br/app/garupa/id1225619383"
  },
  {
    name: "Quiq",
    description: "Plataforma de integração e gestão para restaurantes.",
    technologies: ["Micro Frontends", "React"],
    link: "https://linktr.ee/SomosQuiq"
  },
  {
    name: "Dry Telecom",
    description: "Operadora de telefonia digital (MVNO).",
    technologies: ["Web", "Fullstack"],
    link: "https://site.dryconecta.com.br/"
  },
  {
    name: "Trem de Passageiros (Vale)",
    description: "Aplicativo oficial para compra de passagens e informações do trem da Vale.",
    technologies: ["Mobile", "Integration"],
    link: "https://play.google.com/store/apps/details?id=com.vilaapps.trem_na_palma_da_mao"
  },
  {
    name: "Proatas",
    description: "Sistema de atas públicas.",
    technologies: ["Web", "SaaS"],
    link: "https://www.proatas.com.br/"
  },
  {
    name: "Loga Telecom",
    description: "Portal e serviços para provedor de internet.",
    technologies: ["Web", "React"],
    link: "https://loga.net.br/"
  },
  {
    name: "Telerisco",
    description: "Gestão de risco e monitoramento de cargas.",
    technologies: ["Mobile", "React Native"],
    link: "https://apps.apple.com/br/app/telerisco/id6475565143"
  },
  {
    name: "Folha Vitória",
    description: "Portal de notícias regional.",
    technologies: ["Web", "CMS"],
    link: "https://www.folhavitoria.com.br/"
  },
  {
    name: "CVC",
    description: "Plataforma de turismo e viagens.",
    technologies: ["Next.js", "Enterprise"],
    link: "https://www.cvc.com.br/"
  },
  {
    name: "AECOM",
    description: "Projetos de prospecção de crédito de carbono.",
    technologies: ["Web", "Enterprise"],
    status: "Pré-release"
  },
  {
    name: "Backoffice Ioasys",
    description: "Ferramentas internas de gestão.",
    technologies: ["Internal Tool"],
    status: "Interno"
  },
  {
    name: "SouTag",
    description: "Solução para desconto no abastecimento de motoristas de aplicativo.",
    technologies: ["Mobile"],
    link: "https://apps.apple.com/br/app/soutag/id1546775296"
  },
  {
    name: "SmartRacks",
    description: "Inspeção digital de centros de armazenagem .",
    technologies: ["IoT", "Internal"],
    status: "Projeto Interno"
  },
  {
    name: "Mapa Solidário",
    description: "Auxílio nas enchentes do RS.",
    technologies: ["Social Impact", "Maps"],
    status: "Projeto Social"
  }
];

export const PROJECTS_PERSONAL: Project[] = [
  {
    name: "Petiscoo",
    description: "Plataforma inovadora voltada ao universo pet, conectando doadores e adotantes.",
    technologies: ["Next.js", "React", "Marketplace"],
    link: "https://petiscoo.com.br",
    isPersonal: true
  },
  {
    name: "Cubbi App",
    description: "PWA focado em saúde infantil, registro de cuidados do bebê e geração de relatórios detalhados com IA.",
    technologies: ["PWA", "HealthTech", "React"],
    link: "https://cubbi.app.br",
    isPersonal: true
  },
  {
    name: "Thesis Forge",
    description: "Sistema inteligente que utiliza IA para auxiliar na geração, estruturação e avaliação de TCCs.",
    technologies: ["AI", "LLM", "Education"],
    link: "https://thesisforge.netlify.app",
    isPersonal: true
  }
];

export const EDUCATION = {
  degree: "Análise e Desenvolvimento de Sistemas",
  school: "Estácio de Sá",
  period: "2021 – 2024"
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com/in/vvibrich", icon: "Linkedin" }, // Placeholder as url wasn't provided specifically, but structure is needed
  { name: "GitHub", url: "https://github.com/vvibrich", icon: "Github" }
];