"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ProjectModalContextType {
  openProjectId: string | null;
  openProject: (id: string) => void;
  closeProject: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(
  undefined
);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <ProjectModalContext.Provider
      value={{
        openProjectId,
        openProject: setOpenProjectId,
        closeProject: () => setOpenProjectId(null),
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error(
      "useProjectModal must be used within a ProjectModalProvider"
    );
  }
  return context;
}
