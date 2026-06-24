export interface EducationItem {
  degree: string;
  institution: string;
  graduation: string;
  grade: string;
  percentage: string;
  focus: string[];
}

export interface SkillItem {
  name: string;
  category: 'Technical' | 'Business' | 'Productivity';
  level: number; // 0-100 indicating proficiency percentage
  icon: string;
}

export interface SoftSkillItem {
  name: string;
  description: string;
  icon: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  percentage: number;
}

export interface ObjectiveItem {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface RecruiterMessage {
  senderName: string;
  senderEmail: string;
  companyName: string;
  message: string;
  createdAt: string;
}
