import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Timer from "./components/Timer";
import { themes } from "./themes";
import { STATE_INFO, STATES_IDS } from "./const";

// Creates a Context object that can share data that can be considered "global" for
// a tree of components, without needing to pass props down each level of the tree.
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState("light");
  const [customTheme, setCustomTheme] = React.useState(themes[STATES_IDS["focus"]]);

  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      // setCustomTheme("secondary");
    },
  };

  let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
    palette: {
      mode,
      ...(mode === "light"
        ? {
          // // palette values for light mode
          ...customTheme.light,
        }
        : {
          // palette values for dark mode
          ...customTheme.dark,
        }),
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Timer customTheme={customTheme} setCustomTheme={setCustomTheme} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;