const enum ResumeSectionId {
  TechSkills = 'tech_skills',
  IndustryExperience = 'industry_experience',
  Education = 'education',
  AcademicProjects = 'academic_projects',
}

export const RESUME_SECTION_MAP: Record<ResumeSectionId, string> = {
  [ResumeSectionId.TechSkills]: 'Technical Skills',
  [ResumeSectionId.IndustryExperience]: 'Industry Experience',
  [ResumeSectionId.Education]: 'Education',
  [ResumeSectionId.AcademicProjects]: 'Academic Projects',
}

export const RESUME_SECTIONS_TO_DISPLAY: ResumeSectionId[] = [
  ResumeSectionId.TechSkills,
  ResumeSectionId.IndustryExperience,
  ResumeSectionId.Education,
  ResumeSectionId.AcademicProjects,
]
