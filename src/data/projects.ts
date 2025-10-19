import { Project } from '@/types'

export const projects: Project[] = [
  // Hackathon Winning Project
  {
    _id: 'edgecompress',
    title: 'EdgeCompress - Foundation Model Compression',
    projectType: 'hackathon-winner',
    description: 'EdgeCompress is an AI model compression framework designed for edge deployment. It combines quantization, pruning, and knowledge distillation to shrink large models by 5–10x while keeping accuracy loss under 3%. The system includes a web interface (Next.js + React) and a mobile app (Flutter) for real-time monitoring, configuration, and easy deployment.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&w=800',
    liveUrl: undefined, // Not deployed yet
    githubUrl: 'https://github.com/SKULLFIRE07/EdgeCompress',
    tags: ['Machine Learning', 'Model Compression', 'Edge AI', 'Quantization', 'Flutter', 'Next.js', 'React', 'HuggingFace'],
    featured: true,
    isHackathon: true,
    prize: 'AI/ML Fusion National Hackathon Winner - 10K Prize',
    publishedAt: '2024-12-01'
  },
  
  // ML/DL Projects
  {
    _id: 'power-fault-detection',
    title: 'Power Fault Prediction System',
    projectType: 'machine-learning',
    description: 'AI-powered electrical grid monitoring and fault prediction system with live monitoring capabilities. Features real-time system parameter analysis, fault type prediction, and comprehensive risk assessment with interactive dashboard.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&w=800',
    liveUrl: 'https://tusharnd12.github.io/Power_Fault_Detection/',
    githubUrl: 'https://github.com/SKULLFIRE07/Power_Fault_Detection',
    tags: ['Machine Learning', 'IoT', 'Real-time Monitoring', 'Electrical Systems', 'AI Dashboard'],
    featured: true,
    publishedAt: '2024-11-15'
  },
  
  {
    _id: 'mental-health-assessment',
    title: 'Mental Health Assessment Tool',
    projectType: 'machine-learning',
    description: 'AI-powered early detection system for anxiety & depression using machine learning trained on CDC population health data. Provides demographic-based risk assessment and prevalence prediction for population-level mental health screening.',
    coverImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&w=800',
    liveUrl: 'https://umerkhangolandaz.github.io/-Indicators-of-Anxiety-or-Depression-Mode/',
    githubUrl: 'https://github.com/SKULLFIRE07/Mental_Health_Assessment',
    tags: ['Machine Learning', 'Healthcare AI', 'CDC Data', 'Population Analysis', 'Mental Health'],
    featured: true,
    publishedAt: '2024-10-20'
  },

  // Web Development Projects
  {
    _id: 'pimlico-website',
    title: 'Pimlico Corporate Website',
    projectType: 'web-development',
    description: 'Modern corporate website with sleek design, responsive layout, and interactive elements. Built with cutting-edge web technologies for optimal performance and user experience.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800',
    liveUrl: 'https://craftedsitess.github.io/pimlico-website/',
    githubUrl: 'https://github.com/craftedsitess/pimlico-website',
    tags: ['Web Development', 'Corporate Website', 'Responsive Design', 'Modern UI/UX'],
    featured: true,
    publishedAt: '2024-09-10'
  },

  {
    _id: 'bigbuddie',
    title: 'BigBuddie Platform',
    projectType: 'web-development',
    description: 'Comprehensive platform with modern web interface, featuring dynamic content management and user-friendly design. Built with focus on scalability and performance.',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800',
    liveUrl: 'https://skullfire-2710.github.io/bigbuddie/',
    githubUrl: 'https://github.com/skullfire-2710/bigbuddie',
    tags: ['Web Development', 'Platform', 'Dynamic Content', 'Scalable Architecture'],
    featured: true,
    publishedAt: '2024-08-25'
  },

  {
    _id: 'migliore-life-sciences',
    title: 'Migliore Life Sciences Website',
    projectType: 'web-development',
    description: 'Professional healthcare and life sciences website with clean, medical-grade design. Features comprehensive information architecture and healthcare-specific functionality.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800',
    liveUrl: 'https://migliorelifesciences.in',
    githubUrl: 'https://github.com/SKULLFIRE07/migliorelifesciences',
    tags: ['Web Development', 'Healthcare', 'Life Sciences', 'Professional Website'],
    featured: true,
    publishedAt: '2024-07-15'
  },

  {
    _id: 'beyond-bites',
    title: 'Beyond Bites - Food Platform',
    projectType: 'web-development',
    description: 'Revolutionary food discovery and ordering platform with cutting-edge features. Combines modern web technologies with intuitive user experience for seamless food ordering and discovery.',
    coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&w=800',
    liveUrl: 'https://skullfire07.github.io/beyond_bites/#/',
    githubUrl: 'https://github.com/skullfire07/beyond_bites',
    tags: ['Web Development', 'Food Tech', 'E-commerce', 'React', 'Modern UI'],
    featured: true,
    publishedAt: '2024-06-30'
  },
  
  // Research Projects
  {
    _id: 'assembly-line-detection',
    title: 'Assembly Line Defect Detection',
    projectType: 'computer-vision',
    description: 'Advanced Flask-based application for automated industrial visual inspection using ORB feature matching and homography transformation. Implements sophisticated image processing techniques for real-time defect classification.',
    coverImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: 'https://github.com/SKULLFIRE07/assembly-line-detection',
    tags: ['Computer Vision', 'Industrial AI', 'ORB Features', 'Flask', 'Image Processing', 'Manufacturing'],
    featured: true,
    publishedAt: '2024-05-20'
  },
  
  {
    _id: 'fatigue-detection',
    title: 'Fatigue Detection Using EfficientNet V2',
    projectType: 'machine-learning',
    description: 'CNN model with EfficientNet V2 for real-time fatigue detection, trained on 8,000 curated images for enhanced safety through high-performance GPU-based deployment.',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: 'https://github.com/SKULLFIRE07/fatigue-detection',
    tags: ['Deep Learning', 'CNN', 'EfficientNet', 'Real-time Detection', 'Safety Systems'],
    featured: true,
    publishedAt: '2024-04-15'
  },
  
  {
    _id: 'forest-fire-detection',
    title: 'Forest Fire Detection Using ML',
    projectType: 'machine-learning',
    description: 'Best Project Award winner for forest fire detection using decision trees, random forests, and SVMs. Optimized for low-latency detection in resource-constrained environments.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: 'https://github.com/SKULLFIRE07/forest-fire-detection',
    tags: ['Machine Learning', 'Environmental AI', 'Decision Trees', 'Random Forest', 'SVM'],
    featured: true,
    publishedAt: '2024-03-10'
  }
]
