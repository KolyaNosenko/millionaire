import { connect } from "react-redux";

import { doAnswerQuestion, StoreDispatch, StoreState } from "src/store";
import {
  getCurrentQuestion,
  getCurrentQuestionAnswers,
} from "src/store/selectors";
import GameInProgress from "./GameInProgress";

const mapStateToProps = (state: StoreState) => ({
  question: getCurrentQuestion(state),
  answers: getCurrentQuestionAnswers(state),
});

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    answerQuestion: async (answerIdx: number) =>
      dispatch(doAnswerQuestion(answerIdx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameInProgress);
