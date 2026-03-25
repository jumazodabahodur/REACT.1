import img1Home from '../assets/img1Home.png'
import img2Home from '../assets/img2Home.png'
import img3Home from '../assets/img3Home.png'
import img1Services from '../assets/img1Services.png'
import img2Services from '../assets/img2Services.png'
import img3Services from '../assets/img3Services.png'
import img4Services from '../assets/img4Services.png'
import img5Services from '../assets/img5Services.png'
import img6Services from '../assets/img6Services.png'
import img1Career from '../assets/img1Career.png'
import img2Career from '../assets/img2Career.png'
import img1Contact from '../assets/img1Contact.png'
import zapier from '../assets/Card.png'
import spotify from '../assets/Card (1).png'
import zoom from '../assets/Card (2).png'
import slack from '../assets/Card (3).png'
import amazon from '../assets/Card (4).png'
import adobe from '../assets/Card (5).png'

export const logos = [zapier, spotify, zoom, slack, amazon, adobe]

export const homeServices = [
  {
    id: 1,
    title: 'Predictive Analytics',
    description: 'Forecast business outcomes with models trained on your company data.',
    image: img1Home,
  },
  {
    id: 2,
    title: 'AI Consulting',
    description: 'Expert guidance for integrating AI solutions into your business stack.',
    image: img2Home,
  },
  {
    id: 3,
    title: 'Data Engineering',
    description: 'Build modern pipelines and reliable data platforms for growth.',
    image: img3Home,
  },
]

export const faqItems = [
  {
    id: 1,
    question: 'What services does Catalyst Analytics provide?',
    answer:
      'We deliver AI consulting, data engineering, predictive analytics, ML solutions, and implementation support for modern digital teams.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope, but discovery projects usually take 2–4 weeks and larger implementations often run 6–12 weeks.',
  },
  {
    id: 3,
    question: 'Do you work with startups and enterprises?',
    answer:
      'Yes. We tailor solutions for fast-moving startups, mid-size teams, and enterprise departments with complex data needs.',
  },
  {
    id: 4,
    question: 'Can you modernize our current infrastructure?',
    answer:
      'Yes. We audit your stack, redesign architecture, and help migrate services without disrupting delivery.',
  },
  {
    id: 5,
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We offer monitoring, optimization, retraining support, and roadmap planning after launch.',
  },
]

export const allServices = [
  {
    id: 1,
    title: 'Machine Learning Solutions',
    description: 'Custom ML products built around your business workflows and key metrics.',
    image: img1Services,
    points: ['Predictive models', 'Recommendation systems', 'Workflow automation'],
  },
  {
    id: 2,
    title: 'Blockchain Development',
    description: 'End-to-end blockchain apps and secure smart contract solutions.',
    image: img2Services,
    points: ['Smart contracts', 'Wallet integration', 'Token systems'],
  },
  {
    id: 3,
    title: 'Algorithmic Trading',
    description: 'Data-driven trading tools with research workflows and backtesting.',
    image: img3Services,
    points: ['Signal generation', 'Risk management', 'Historical analysis'],
  },
  {
    id: 4,
    title: 'Data Engineering',
    description: 'Reliable pipelines, warehousing, and analytics infrastructure.',
    image: img4Services,
    points: ['Batch pipelines', 'Real-time ETL', 'Cloud storage'],
  },
  {
    id: 5,
    title: 'Predictive Analytics',
    description: 'Turn historical data into forecasts and decision support systems.',
    image: img5Services,
    points: ['Demand forecasting', 'Scenario planning', 'Executive dashboards'],
  },
  {
    id: 6,
    title: 'MLOps & Infrastructure',
    description: 'Operationalize models with deployment, monitoring, and retraining.',
    image: img6Services,
    points: ['CI/CD for ML', 'Model monitoring', 'Cloud deployment'],
  },
]

export const jobs = [
  {
    id: 1,
    slug: 'web-designer',
    title: 'WEB DESIGNER',
    salary: '$45,000 - $65,000 / year',
    experience: '1+ year',
    deadline: '30/09/2025',
    department: 'Design',
    workplace: 'Remote',
    jobType: 'Full Time',
    image: img2Career,
    skills:
      'Proficiency in Adobe Creative Suite, Figma, UI/UX principles, responsive design, and strong portfolio work.',
    about:
      'You will design modern landing pages, internal dashboards, and polished brand experiences. We need a designer who can convert product goals into clear interfaces.',
  },
  {
    id: 2,
    slug: 'mobile-app-developer',
    title: 'MOBILE APP DEVELOPER',
    salary: '$55,000 - $75,000 / year',
    experience: '2+ years',
    deadline: '15/10/2025',
    department: 'Engineering',
    workplace: 'Hybrid',
    jobType: 'Full Time',
    image: img1Career,
    skills:
      'Proficiency in iOS and Android development, modern frameworks, state management, and mobile debugging.',
    about:
      'You will build and maintain high-quality mobile apps with close collaboration from design and backend teams.',
  },
  {
    id: 3,
    slug: 'digital-marketing-specialist',
    title: 'DIGITAL MARKETING SPECIALIST',
    salary: '$50,000 - $65,000 / year',
    experience: '3+ years',
    deadline: '22/11/2025',
    department: 'Marketing',
    workplace: 'Onsite',
    jobType: 'Contract',
    image: img1Career,
    skills:
      'SEO, SEM, social media strategy, campaign analytics, and performance reporting.',
    about:
      'You will own growth campaigns, optimize acquisition funnels, and work closely with leadership on positioning.',
  },
  {
    id: 4,
    slug: 'project-manager',
    title: 'PROJECT MANAGER',
    salary: '$60,000 - $80,000 / year',
    experience: '5+ years',
    deadline: '05/12/2025',
    department: 'Operations',
    workplace: 'Remote',
    jobType: 'Full Time',
    image: img1Career,
    skills:
      'Strong communication, agile delivery, planning, stakeholder alignment, and risk management.',
    about:
      'You will coordinate multi-disciplinary teams, keep roadmaps on track, and ensure projects ship smoothly.',
  },
]

export const careerHero = img1Career
export const contactHero = img1Contact
