import { computed } from 'vue'
import { defineStore } from 'pinia'
import { RESUME_SECTION_MAP, RESUME_SECTIONS_TO_DISPLAY } from '@/constants/resume-sections'

export const useGetResumeSection = defineStore('resume-sections', () => {
  const resumeSections = computed(() =>
    RESUME_SECTIONS_TO_DISPLAY.map((resumeSectionId) => [
      resumeSectionId,
      RESUME_SECTION_MAP[resumeSectionId],
    ]),
  )
  return { resumeSections }
})
