export interface Project {
  _id: string
  title: string
  slug?: {
    current: string
  }
  coverImage?: {
    asset?: {
      _ref: string
      _type: string
    }
    alt?: string
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
  } | string
  projectType: 'web-development' | 'machine-learning' | 'computer-vision' | 'mobile-app' | 'desktop-app' | 'research' | 'hackathon-winner'
  description: string | any[]
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  featured: boolean
  publishedAt?: string
  isHackathon?: boolean
  prize?: string
}

export interface Experience {
  company: string
  role: string
  type: 'On-Site' | 'Remote' | 'Hybrid'
  location: string
  duration: string
  description: string[]
}

export interface Education {
  institution: string
  degree: string
  duration: string
  grade?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface CursorState {
  isHovering: boolean
  text: string
  variant: 'default' | 'project' | 'link'
}
