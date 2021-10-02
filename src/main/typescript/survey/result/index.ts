import { Survey } from "../survey"

export class SurveyResult implements Survey {
  type: string
  
  constructor(type: string) {
    this.type = type;
  }
}

export const madScientist = new SurveyResult("Mad Scientist");
export const macGyver = new SurveyResult("MacGyver");
export const theArchitect = new SurveyResult("The Architect");
export const codeGuardian = new SurveyResult("Code Guardian");
export const ninja = new SurveyResult("Ninja");
