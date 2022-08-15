const toggleTheme = () => {
  const paletteMode = localStorage.getItem('paletteMode');
  localStorage.setItem('paletteMode', paletteMode === 'light' ? 'dark' : 'light')
}

export default toggleTheme;
