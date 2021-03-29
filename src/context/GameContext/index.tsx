import React, { useContext } from "react";

export enum GameSteps {
  START,
  IN_PROGRESS,
  OVER,
}

interface GameContextData {
  step: GameSteps;
}

const GameContext = React.createContext<GameContextData>({
  step: GameSteps.START,
});

const GameProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const initialData: GameContextData = { step: GameSteps.IN_PROGRESS };

  return (
    <GameContext.Provider value={initialData}>{children}</GameContext.Provider>
  );
};

export const useGameContext = (): { step: GameSteps } => {
  const { step } = useContext(GameContext);

  return { step };
};

export default GameProvider;
