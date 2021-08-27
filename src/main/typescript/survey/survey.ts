export function newSurveyStep(index: number): SurveyStep {
  switch (index) {
    case 0:
      return new Multitasking()
      break
    case 1:
      return new UnexpectedError()
      break
    case 2:
      return new Cooperation()
      break
    case 3:
      return new Deadline()
      break
    case 4:
      return new CodeQuality()
      break
    case 5:
      return new CheckeredShirt()
      break
    case 6:
      return new NewTechnology()
      break
    case 7:
      return new WorkingType()
      break
    case 8:
      return new ProjectReview()
      break
    case 9:
      return new ImportantForProgramming()
      break
    default:
      throw Error(`지원하지 않는 index: ${index}`)
  }
}

export interface Survey { }

export abstract class SurveyStep implements Survey {
  abstract index: number
  abstract question: string
  abstract leftAnswer: string
  abstract rightAnswer: string
  abstract leftDestination: Survey
  abstract rightDestination: Survey

  public next(answer: string): Survey {
    if (answer == this.leftAnswer) {
      return this.leftDestination
    } else if (answer == this.rightAnswer) {
      return this.rightDestination
    } else {
      throw new Error(`잘못된 답변: ${answer}`)
    }
  }
}

export interface SurveyResult extends Survey {
  type: string
}

// 0
export class Multitasking extends SurveyStep {
  index: number = 0
  question: string = "멀티태스킹에 대해 어떻게 생각하시나요?"
  leftAnswer: string = "저는 여러가지 일들을 가뿐하게 처리하죠!"
  rightAnswer: string = "한번에 하나의 일만 할 수는 없는건가요?"
  leftDestination: Survey = new UnexpectedError()
  rightDestination: Survey = new Cooperation()
}

// 1
class UnexpectedError extends SurveyStep {
  index: number = 1
  question: string = "예측할 수 없는 에러가 갑자기 일어난다면, 어떻게 하겠어요?"
  leftAnswer: string = "포기란 없죠! 코드에 답이 있을거에요!"
  rightAnswer: string = "구글신을 믿습니다..! 검색, 검색, 검색!"
  leftDestination: Survey = new Deadline()
  rightDestination: Survey = new CodeQuality()
}

// 2
class Cooperation extends SurveyStep {
  index: number = 2
  question: string = "협업에 대해서 어떻게 생각하시나요?"
  leftAnswer: string = "백지장도 맞들면 낫죠!"
  rightAnswer: string = "저는 외로운 한마리 늑대에요.."
  leftDestination: Survey = new CodeQuality()
  rightDestination: Survey = new CheckeredShirt()
}

// 3
class Deadline extends SurveyStep {
  index: number = 3
  question: string = "당신은 마감기한을 지킬 수 있나요?"
  leftAnswer: string = "시간은 상대적인거 아시죠? 그러니까 마감기한도 상대적인거에요."
  rightAnswer: string = "저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!"
  leftDestination: Survey = new NewTechnology()
  rightDestination: Survey = new WorkingType()
}

// 4
class CodeQuality extends SurveyStep {
  index: number = 4
  question: string = "코드 퀄리티는 중요한가요?"
  leftAnswer: string = "완벽한 코드보다 완성된 코드가 중요한 거 같아요."
  rightAnswer: string = "코드는 룰을 따라야하죠! 완벽한 퀄리티가 중요해요."
  leftDestination: Survey = new WorkingType()
  rightDestination: Survey = new ProjectReview()
}

// 5
class CheckeredShirt extends SurveyStep {
  index: number = 5
  question: string = "체크무늬 셔츠 좋아하시나요?"
  leftAnswer: string = "자고로 체크무늬 셔츠는 유행에 뒤떨어진 적이 없죠!"
  rightAnswer: string = "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠.."
  leftDestination: Survey = new ProjectReview()
  rightDestination: Survey = new ImportantForProgramming()
}

// 6
class NewTechnology extends SurveyStep {
  index: number = 6
  question: string = "당신이 프로젝트를 진행하며 새로운 기술을 배워야할 할 때에..."
  leftAnswer: string = "저는 기술에 대해서 깊게 공부하고 시작하기 전에 여러가지 것들을 시도해보는 편이에요."
  rightAnswer: string = "빠르게 기초를 배우고 코드에 바로 적용하는 편이에요."
  leftDestination: Survey = new MadScientist()
  rightDestination: Survey = new MacGyver()
}

// 7
class WorkingType extends SurveyStep {
  index: number = 7
  question: string = "일하는 스타일이 어떠세요?"
  leftAnswer: string = "우선 돌아가는 코드를 만들거에요!"
  rightAnswer: string = "모든 가능성을 고려한 코드를 작성하는 편이에요!"
  leftDestination: Survey = new MacGyver()
  rightDestination: Survey = new TheArchitect()
}

// 8
class ProjectReview extends SurveyStep {
  index: number = 8
  question: string = "프로젝트가 끝났을 때 당신이 드는 생각은"
  leftAnswer: string = "시간이 더 있었다면 더 잘 할 수 있었을텐데.."
  rightAnswer: string = "저는 다음 도전을 기다리죠!"
  leftDestination: Survey = new WorkingType()
  rightDestination: Survey = new CodeGuardian()
}

// 9
class ImportantForProgramming extends SurveyStep {
  index: number = 9
  question: string = "프로그래밍에 있어 가장 중요한 것은 무엇인가요?"
  leftAnswer: string = "열정!"
  rightAnswer: string = "재능!"
  leftDestination: Survey = new CodeGuardian()
  rightDestination: Survey = new Ninja()
}

// 10
class MadScientist implements SurveyResult {
  type: string = "Mad Scientist"
}

// 11
class MacGyver implements SurveyResult {
  type: string = "MacGyver"
}

// 12
class TheArchitect implements SurveyResult {
  type: string = "The Architect"
}

// 13
class CodeGuardian implements SurveyResult {
  type: string = "Code Guardian"
}

// 14
class Ninja implements SurveyResult {
  type: string = "Ninja"
}
