import { Answer } from "../answer"
import { CodeGuardian, MacGyver, MadScientist, Ninja, TheArchitect } from "../result"
import { Survey } from "../survey";

export abstract class SurveyStep implements Survey {
  abstract index: number
  abstract question: string
  abstract answers: Answer[];

  public next(answerStr: string): Survey {
    const answer = this.answers.find((a) => a.value === answerStr);
    if (answer) {
      return answer.target
    } else {
      throw new Error(`잘못된 답변: ${answer}`)
    }
  }
}

// 0
export class Multitasking extends SurveyStep {
  index = 0
  question = "멀티태스킹에 대해 어떻게 생각하시나요?"
  answers = [
    new Answer("저는 여러가지 일들을 가뿐하게 처리하죠!", new UnexpectedError()),
    new Answer("한번에 하나의 일만 할 수는 없는건가요?", new Cooperation())
  ]
}

// 1
export class UnexpectedError extends SurveyStep {
  index = 1
  question = "예측할 수 없는 에러가 갑자기 일어난다면, 어떻게 하겠어요?"
  answers = [
    new Answer("포기란 없죠! 코드에 답이 있을거에요!", new Deadline()),
    new Answer("구글신을 믿습니다..! 검색, 검색, 검색!", new CodeQuality())
  ]
}

// 2
export class Cooperation extends SurveyStep {
  index = 2
  question = "협업에 대해서 어떻게 생각하시나요?"
  answers = [
    new Answer("백지장도 맞들면 낫죠!", new CodeQuality()),
    new Answer("저는 외로운 한마리 늑대에요..", new CheckeredShirt())
  ]
}

// 3
export class Deadline extends SurveyStep {
  index = 3
  question = "당신은 마감기한을 지킬 수 있나요?"
  answers = [
    new Answer("시간은 상대적인거 아시죠? 그러니까 마감기한도 상대적인거에요.", new NewTechnology()),
    new Answer("저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!", new WorkingType())
  ]
}

// 4
export class CodeQuality extends SurveyStep {
  index = 4
  question = "코드 퀄리티는 중요한가요?"
  answers = [
    new Answer("완벽한 코드보다 완성된 코드가 중요한 거 같아요.", new WorkingType()),
    new Answer("코드는 룰을 따라야하죠! 완벽한 퀄리티가 중요해요.", new ProjectReview())
  ]
}

// 5
export class CheckeredShirt extends SurveyStep {
  index = 5
  question = "체크무늬 셔츠 좋아하시나요?"
  answers = [
    new Answer("자고로 체크무늬 셔츠는 유행에 뒤떨어진 적이 없죠!", new ProjectReview()),
    new Answer("세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..", new ImportantForProgramming())
  ]
}

// 6
export class NewTechnology extends SurveyStep {
  index = 6
  question = "당신이 프로젝트를 진행하며 새로운 기술을 배워야할 할 때에..."
  answers = [
    new Answer("저는 기술에 대해서 깊게 공부하고 시작하기 전에 여러가지 것들을 시도해보는 편이에요.", new MadScientist()),
    new Answer("빠르게 기초를 배우고 코드에 바로 적용하는 편이에요.", new MacGyver())
  ]
}

// 7
export class WorkingType extends SurveyStep {
  index = 7
  question = "일하는 스타일이 어떠세요?"
  answers = [
    new Answer("우선 돌아가는 코드를 만들거에요!", new MacGyver()),
    new Answer("모든 가능성을 고려한 코드를 작성하는 편이에요!", new TheArchitect())
  ]
}

// 8
export class ProjectReview extends SurveyStep {
  index = 8
  question = "프로젝트가 끝났을 때 당신이 드는 생각은"
  answers = [
    new Answer("시간이 더 있었다면 더 잘 할 수 있었을텐데..", new WorkingType()),
    new Answer("저는 다음 도전을 기다리죠!", new CodeGuardian())
  ]
}

// 9
export class ImportantForProgramming extends SurveyStep {
  index = 9
  question = "프로그래밍에 있어 가장 중요한 것은 무엇인가요?"
  answers = [
    new Answer("열정!", new CodeGuardian()),
    new Answer("재능!", new Ninja())
  ]
}