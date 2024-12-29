import { useContext } from "react";
import { themeContext } from "../App";
import './SwitchTheme.css'

const SwitchTheme = () => {
    const {theme, setTheme} = useContext(themeContext)
    return (
        <>
            <button onClick={()=>setTheme((theme ==='light')? 'dark':'light')}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button> 
            <section className={theme}>
                
                {theme === 'light' ? 'I am a big section with a light mode !' : 'I am a big section with a dark mode !'}
            </section>
        </>
    )
}

export default SwitchTheme