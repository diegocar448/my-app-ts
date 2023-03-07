import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import ContaInfo from './pages/ContaInfo';

interface IAppContext{
  user:string
}

export const AppContext = createContext( {} as IAppContext );

const AppContextProvider = ({ children } : any) => {
  const user = 'digo'
  return (
    <AppContext.Provider value={ {user} }  >
      { children }
    </AppContext.Provider>
  )
}


function App() {
  return (
    //Tudo que estiver dentro do BrowserRouter terá as configurações de react-router-dom
    <BrowserRouter>      
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={
                <Home />
              } />
              <Route path='/conta/:id' element={
                <Conta/>
              } />
              <Route path='/infoconta/' element={
                <ContaInfo/>
              } />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

    
  );
}

export default App;
