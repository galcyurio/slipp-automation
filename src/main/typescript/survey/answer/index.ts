import { Survey } from "../survey";

export class Answer {
  value: string;
  target: Survey;

  constructor(value: string, target: Survey) {
    this.value = value;
    this.target = target;
  }
}

