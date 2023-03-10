import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';





function App() {
  return (
    //Tudo que estiver dentro do BrowserRouter terá as configurações de react-router-dom
    <BrowserRouter>      
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

    
  );
}

export default App;
