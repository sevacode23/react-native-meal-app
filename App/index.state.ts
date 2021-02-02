import { useState } from "react";

interface IAppState {
  isFontsLoaded: boolean;
}

const initialState: IAppState = {
  isFontsLoaded: false,
};

export function useAppState() {
  const [appState, setAppState] = useState(initialState);

  const onFontsLoaded = () => {
    setAppState((currentState) => ({
      ...currentState,
      isFontsLoaded: true,
    }));
  };

  return { ...appState, onFontsLoaded };
}
