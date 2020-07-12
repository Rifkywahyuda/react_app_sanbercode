import React, { useContext } from'react';
import  {ThemeContext} from './themeContext'
{/*ini bagian dari context api tapi tidak cukup waktu mengutak utiknya*/}

export default function MyPage(){
    const { colorTheme, onChangeTheme } = useContext(ThemeContext);
    console.log(onChangeTheme)
    console.log(colorTheme)
    return (
        <div style = {{
            backgroundColor:
            colorTheme==='dark' ? 'black' : 'white',
            width:'100vw',
            height:'100vh',
            display:'flex',
            flexdirection: 'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <button
            style={{ marginTop:30}}
            onClick={onChangeTheme}
            > Ubah Tema</button>
        </div>
    )
}