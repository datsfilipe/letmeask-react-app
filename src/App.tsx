import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../src/styles/global';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';



function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <ThemeProvider theme={
            (props: DefaultTheme) => props}
          >
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </ThemeProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
