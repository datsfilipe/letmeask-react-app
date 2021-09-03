import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeContextProvider } from './contexts/ThemeContext';
import { Theme } from './components/Theme/index';
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
          <Theme>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </Theme>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
