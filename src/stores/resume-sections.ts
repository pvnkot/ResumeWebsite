import { computed } from 'vue'
import { defineStore } from 'pinia'

interface ResumeSection {
  resumeSectionId: string
  resumeSectionName: string
}

const FAKE_RESUME_SECTIONS: ResumeSection[] = [
  {
    resumeSectionId: 'tech_skills',
    resumeSectionName: 'Technical Skills',
  },
  {
    resumeSectionId: 'industry_experience',
    resumeSectionName: 'Industry experience',
  },
  {
    resumeSectionId: 'education',
    resumeSectionName: 'Education',
  },
  {
    resumeSectionId: 'academic_projects',
    resumeSectionName: 'Academic projects',
  },
]

export const useGetResumeSection = defineStore('resume-sections', () => {
  const resumeSections = computed(() =>
    FAKE_RESUME_SECTIONS.map(({ resumeSectionId, resumeSectionName }) => [
      resumeSectionId,
      resumeSectionName,
    ]),
  )
  return { resumeSections }
})
