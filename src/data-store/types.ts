import type { ReactNode } from "react";

export interface myExperienceType {
  name: string,
  position: string,
  timeline: string
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

export interface WritingType {
  title: string,
  description: string,
  link: string,
  date: string,
  tags: string[],
}