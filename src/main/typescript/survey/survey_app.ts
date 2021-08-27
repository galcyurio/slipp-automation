import { Survey, SurveyStep, newSurveyStep, SurveyResult } from './survey';

/**
 * @param answers {string[]} 답변 목록
 * @returns 설문 결과
 */
export function getSurveyResult(answers: string[]): string {
  let survey: Survey = newSurveyStep(0)
  while (survey instanceof SurveyStep) {
    const answer = answers[survey.index]
    survey = survey.next(answer)
  }
  return (survey as SurveyResult).type
}