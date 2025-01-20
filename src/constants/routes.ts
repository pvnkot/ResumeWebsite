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

export const enum PageRouteId {
  TechSkills = 'tech-skills',
  IndustryExperience = 'industry-experience',
  Education = 'education',
  AcademicProjects = 'academic-projects',
}

export const Routes: Record<PageRouteId, ResumeSectionId> = {
  [PageRouteId.TechSkills]: ResumeSectionId.TechSkills,
  [PageRouteId.IndustryExperience]: ResumeSectionId.IndustryExperience,
  [PageRouteId.Education]: ResumeSectionId.Education,
  [PageRouteId.AcademicProjects]: ResumeSectionId.AcademicProjects,
}
