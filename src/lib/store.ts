import { create } from 'zustand'
import { CursorState } from '@/types'

interface AppState {
  // Loading states
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // 3D Scene states
  sceneReady: boolean
  setSceneReady: (ready: boolean) => void
  
  // Cursor states
  cursor: CursorState
  setCursor: (cursor: Partial<CursorState>) => void
  
  // Navigation states
  currentSection: string
  setCurrentSection: (section: string) => void
  
  // Theme states (for future dark/light mode)
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}

export const useAppStore = create<AppState>((set) => ({
  // Loading states
  isLoading: false, // Start with false to show content immediately
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  // 3D Scene states
  sceneReady: false,
  setSceneReady: (ready) => set({ sceneReady: ready }),
  
  // Cursor states
  cursor: {
    isHovering: false,
    text: '',
    variant: 'default',
  },
  setCursor: (cursorUpdate) => 
    set((state) => ({ 
      cursor: { ...state.cursor, ...cursorUpdate } 
    })),
  
  // Navigation states
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),
  
  // Theme states
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}))
