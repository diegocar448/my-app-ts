import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext{
    user:string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,    
    informationsUser: string,
    setInformationsUserIn: (informationsUser: string) => void,    
}
  
export const AppContext = createContext( {} as IAppContext );
  
export const AppContextProvider = ({ children } : any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const [ informationsUser, setInformationsUserIn ] = useState<any>({})


  const storage = getAllLocalStorage()
  
  useEffect(() => {
    //não sobrescrever quando for true
    if(storage){  
       
      const { login } =  JSON.parse(storage);
      setInformationsUserIn(JSON.parse(storage))      
      setIsLoggedIn(login)      
    }

  }, [])

  const user = 'digo'
  
  
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, informationsUser, setInformationsUserIn }}  >
      { children }
    </AppContext.Provider>
  )
}