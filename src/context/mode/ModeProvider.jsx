import { useEffect, useState } from "react";
import { ModeContext, styles, initialMode } from "./ModeContext";



export const ModeProvider = ({children}) => {
    const light = "light"
    const dark = "dark"
    
    const getMode = ()=>{
        const result = JSON.parse(localStorage.getItem("modeContext")) || "light"

        // console.log("Result initial ", result);

        return result 
    }

    
    const [modeContext, setModeContext] = useState(getMode())
    // console.log("modeCOntext in provider ",modeContext);
    const [style, setStyle] = useState(styles[modeContext])

    const setMode = (value)=>{
        // console.log("Value in setStateModeContext is ",value);
        if(value ==true){
            setModeContext(light)
            setStyle(styles[light])
        }else if(value === false){
            setModeContext(dark)
            setStyle(styles[dark])
        }
    }

    useEffect(() => {
        localStorage.setItem("modeContext", JSON.stringify(modeContext))
    }, [modeContext])
    
   

    const handleModeContext = (value) => {
        // console.log("Value in provider ",value);
        setMode(value)
    }

   

    const data = {style, handleModeContext, getMode}
    // console.log("data ",data);
  return (
    <ModeContext.Provider value={data}>
        {children}
    </ModeContext.Provider>
  )
}
