import React from'react';
import MyComponent from './MyComponent';
import { ThemeContext } from './themeContext';

export default class ContextApp extends React.Component {
    constructor () {
        super();
        this.onChangeTheme = () => {
            this.setState(prevState => ({
                colorTheme: prevState.theme === 'dark' ? 'white' : 'dark'
            }))
        }
        this.state = {
            colorTheme:'dark',
            onChangeTheme: this.onChangeTheme
        }
    }

    render() {
        return(
            <ThemeContext.Provider value={this.state}>
                <MyComponent />
            </ThemeContext.Provider>
        )
    }
}
