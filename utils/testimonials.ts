export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    text: string;
    linkedinUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Walber Oliveira',
        role: 'Tech Lead / Arquiteto de Software',
        company: 'VilaApps',
        image: '', // Deixe vazio para usar fallback
        text: `Profissional com alta capacidade técnica e comunicativo. Trabalhamos no mesmo projeto onde elaboramos uma solução simples a partir de uma aplicação complexa e legada. 
               Durante nossa colaboração, pude observar sua capacidade de compreender e responder aos requisitos propostos de forma rápida e eficaz.Ele não apenas contribuiu de forma significativa para o trabalho em equipe, mas também demonstrou habilidades excepcionais ao trabalhar de forma independente.
               Recomendo sua participação em qualquer projeto.`,
        linkedinUrl: 'https://www.linkedin.com/in/walber-oliveira'
    },
    {
        id: '2',
        name: 'Nome da Gestora',
        role: 'Product Manager',
        company: 'Empresa Y',
        image: '',
        text: 'Trabalhar com o Vinicius foi uma ótima experiência. Ele é proativo, comunicativo e sempre busca entender o negócio para entregar a melhor solução.',
        linkedinUrl: 'https://linkedin.com',
    },
    {
        id: '3',
        name: 'Nome do Tech Recruiter',
        role: 'Tech Recruiter',
        company: 'Empresa Z',
        image: '',
        text: 'Profissional dedicado e com excelentes soft skills. Recomendo fortemente para qualquer time que busque um dev React sénior.',
        linkedinUrl: 'https://linkedin.com'
    }
];
