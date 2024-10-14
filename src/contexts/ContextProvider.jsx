import React , {createContext , useContext , useState } from "react" ; 

const StateContext = createContext() ;

const initialState = {
    chat : false , 
    cart : false , 
    userProfile : false , 
    notification : false ,
}
export const ContextProvider = ({children}) => {
    let [screenSize , setScreenSize] = useState(null) ;
    let [ activeMenu , setActiveMenu  ] = useState(true) ;
    let [isClicked , setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState("#03C9D7") ;
    const [currentMode, setCurrentMode] = useState("Light") ;
    const [ ThemeSettings, setThemeSettings] = useState(false) ; 

    const setMode = (e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem("themeMode" , e.target.value) ; 
        setThemeSettings(false)
    }
    
    const setColor = (e)=>{
        setCurrentColor(e)
        localStorage.setItem("ColorMode" , e) ; 
        setThemeSettings(false)
    }

    let handelClick = (ClickedElement)=>{
        setIsClicked({...initialState , [ClickedElement] : true}) ;
    }

    return (

        <StateContext.Provider value={{activeMenu , setActiveMenu , isClicked , setIsClicked, handelClick , screenSize , setScreenSize , currentColor , currentMode , setMode ,  setColor , ThemeSettings ,setThemeSettings }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = ()=> useContext(StateContext) ; 