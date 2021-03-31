import { connect } from "react-redux";

import { doAnswerQuestion, StoreDispatch, StoreState } from "src/store";
import {
  getCurrentQuestion,
  getCurrentQuestionAnswers,
  getQuestionsPrizes,
} from "src/store/selectors";
import GameInProgress from "./GameInProgress";

const mapStateToProps = (state: StoreState) => ({
  currentQuestion: getCurrentQuestion(state),
  answers: getCurrentQuestionAnswers(state),
  questionPrizes: getQuestionsPrizes(state),
});

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    answerQuestion: async (answerIdx: number) =>
      dispatch(doAnswerQuestion(answerIdx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameInProgress);
