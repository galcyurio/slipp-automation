import { Survey } from "../survey"

export interface SurveyResult extends Survey {
  type: string
}

// 10
export class MadScientist implements SurveyResult {
  type: string = "Mad Scientist"
}

// 11
export class MacGyver implements SurveyResult {
  type: string = "MacGyver"
}

// 12
export class TheArchitect implements SurveyResult {
  type: string = "The Architect"
}

// 13
export class CodeGuardian implements SurveyResult {
  type: string = "Code Guardian"
}

// 14
export class Ninja implements SurveyResult {
  type: string = "Ninja"
}
