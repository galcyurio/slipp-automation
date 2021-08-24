import { Survey, SurveyStep, newSurveyStep, SurveyResult } from './survey';

export function getSurveyResult(answers: string[]): string {
  let survey: Survey = newSurveyStep(0)
  while (survey instanceof SurveyStep) {
    const answer = answers[survey.index]
    survey = survey.next(answer)
  }
  return (survey as SurveyResult).type
}
