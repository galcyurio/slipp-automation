import { expect } from 'chai';
import { describe, it } from 'mocha';
import { getSurveyResult } from '../../../main/typescript/survey/survey_app';

describe('app', () => {
  it('should MadScientist', () => {
    // given
    const answers = [
      "저는 여러가지 일들을 가뿐하게 처리하죠!",
      "포기란 없죠! 코드에 답이 있을거에요!",
      "",
      "시간은 상대적인거 아시죠? 그러니까 마감기한도 상대적인거에요.",
      "",
      "",
      "저는 기술에 대해서 깊게 공부하고 시작하기 전에 여러가지 것들을 시도해보는 편이에요.",
      "",
      "",
      "",
    ]

    // when
    const actual = getSurveyResult(answers)

    // then
    expect(actual).equal('Mad Scientist')
  })

  it('should MacGyver', () => {
    // given
    const answers = [
      "저는 여러가지 일들을 가뿐하게 처리하죠!",
      "구글신을 믿습니다..! 검색, 검색, 검색!",
      "백지장도 맞들면 낫죠!",
      "저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!",
      "완벽한 코드보다 완성된 코드가 중요한 거 같아요.",
      "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..",
      "빠르게 기초를 배우고 코드에 바로 적용하는 편이에요.",
      "우선 돌아가는 코드를 만들거에요!",
      "저는 다음 도전을 기다리죠!",
      "열정!",
    ]

    // when
    const actual = getSurveyResult(answers)

    // then
    expect(actual).equal('MacGyver')
  })

  it('should TheArchitect', () => {
    // given
    const answers = [
      "저는 여러가지 일들을 가뿐하게 처리하죠!",
      "구글신을 믿습니다..! 검색, 검색, 검색!",
      "백지장도 맞들면 낫죠!",
      "저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!",
      "완벽한 코드보다 완성된 코드가 중요한 거 같아요.",
      "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..",
      "빠르게 기초를 배우고 코드에 바로 적용하는 편이에요.",
      "모든 가능성을 고려한 코드를 작성하는 편이에요!",
      "저는 다음 도전을 기다리죠!",
      "열정!",
    ]

    // when
    const actual = getSurveyResult(answers)

    // then
    expect(actual).equal('The Architect')
  })

  it('should CodeGuardian', () => {
    // given
    const answers = [
      "한번에 하나의 일만 할 수는 없는건가요?",
      "구글신을 믿습니다..! 검색, 검색, 검색!",
      "백지장도 맞들면 낫죠!",
      "저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!",
      "코드는 룰을 따라야하죠! 완벽한 퀄리티가 중요해요.",
      "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..",
      "빠르게 기초를 배우고 코드에 바로 적용하는 편이에요.",
      "모든 가능성을 고려한 코드를 작성하는 편이에요!",
      "저는 다음 도전을 기다리죠!",
      "열정!",
    ]

    // when
    const actual = getSurveyResult(answers)

    // then
    expect(actual).equal('Code Guardian')
  })

  it('should Ninja', () => {
    // given
    const answers = [
      "한번에 하나의 일만 할 수는 없는건가요?",
      "",
      "저는 외로운 한마리 늑대에요..",
      "",
      "",
      "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..",
      "",
      "",
      "",
      "재능!",
    ]

    // when
    const actual = getSurveyResult(answers)

    // then
    expect(actual).equal('Ninja')
  })
});
