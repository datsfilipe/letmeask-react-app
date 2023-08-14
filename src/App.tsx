import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeContextProvider } from './contexts/ThemeContext';
import { Theme } from './components/Theme/index';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/rooms/new',
    element: <NewRoom />,
  },
  {
    path: '/rooms/:id',
    element: <Room />,
  },
  {
    path: '/admin/rooms/:id',
    element: <AdminRoom />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Theme>
            <RouterProvider router={router}/>
          </Theme>
        </ThemeContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
