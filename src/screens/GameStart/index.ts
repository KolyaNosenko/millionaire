import { connect } from "react-redux";
import { doStartGame, StoreDispatch } from "src/store";
import GameStart from "./GameStart";

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    startGame: async () => dispatch(doStartGame()),
  };
};

export default connect(null, mapDispatchToProps)(GameStart);
