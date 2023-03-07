import { createContext } from 'react';

interface IAppContext{
    user:string,
    isLoggedIn: boolean,
  }
  
  export const AppContext = createContext( {} as IAppContext );
  
  export const AppContextProvider = ({ children } : any) => {
    const user = 'digo'
    const isLoggedIn = true
    return (
      <AppContext.Provider value={ {user, isLoggedIn} }  >
        { children }
      </AppContext.Provider>
    )
  }