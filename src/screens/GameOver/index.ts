import { connect } from "react-redux";
import { doRestartGame, StoreDispatch, StoreState } from "src/store";
import { getFinalPrize } from "src/store/selectors";
import GameOver from "./GameOver";

const mapStateToProps = (state: StoreState) => ({
  finalPrize: getFinalPrize(state),
});

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    restartGame: async () => dispatch(doRestartGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
