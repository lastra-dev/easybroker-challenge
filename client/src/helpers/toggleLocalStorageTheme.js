/**
 * Toggles color palette theme mode in local storage.
 */
const toggleLocalStorageTheme = () => {
  const paletteMode = localStorage.getItem("paletteMode");
  localStorage.setItem(
    "paletteMode",
    paletteMode === "light" ? "dark" : "light"
  );
};

export default toggleLocalStorageTheme;
