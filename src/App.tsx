import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './services/storage';


function App() {
  
  
  createLocalStorage();

  console.log(getAllLocalStorage);

  changeLocalStorage({
    login:true,
  })

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
