import type { ReactNode } from "react";

export interface myExperienceType {
  name: string,
  position: string,
  timeline: string,
  readMoreLink? : string
}

export interface myProjectType {
  title: string,
  description: string,
  link: string,
  imageUrl: string
}

export interface footerLinkType {
  label: string,
  link: string,
  icon: ReactNode
}