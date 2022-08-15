import AppRoutes from "AppRoutes";
import Box from "@mui/material/Box";
import NavBar from "components/NavBar";
import toggleLocalStorageTheme from "helpers/toggleLocalStorageTheme";
import { createContext, useState, useMemo, useContext } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material/styles";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function AppContent() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <NavBar
        paletteMode={theme.palette.mode}
        handlePaletteMode={colorMode.toggleColorMode}
      />
      <AppRoutes />
    </Box>
  );
}

const App = () => {
  const paletteMode = localStorage.getItem("paletteMode");
  const [mode, setMode] = useState(paletteMode || "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        toggleLocalStorageTheme();
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#4573FF",
          },
          secondary: {
            main: "#7345ff",
          },
          error: {
            main: "#ff4573",
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
