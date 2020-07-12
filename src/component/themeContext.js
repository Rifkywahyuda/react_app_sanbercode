import React from 'react';
{/*ini bagian dari context api tapi tidak cukup waktu mengutak utiknya*/}
 const ThemeContext = React.createContext({
    colorTheme: 'dark',
    onChangeTheme :() => { }
});
export {ThemeContext};