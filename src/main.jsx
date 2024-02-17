import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './context/tokenContext.jsx'
import { MeProvider } from './context/meContext.jsx'
import { ThemeProvider } from './context/themeContext.jsx'
import { NotificationProvider } from './context/notificationContext.jsx'
import { LangProvider } from './context/langContext.jsx'
import "./lang/settings.js";
import { SearchProvider } from './context/searchContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <TokenProvider>
          <MeProvider>
            <ThemeProvider>
                <LangProvider>
                  <NotificationProvider>
                      <SearchProvider>
                          <App />
                      </SearchProvider>
                   </NotificationProvider>
                </LangProvider>
            </ThemeProvider>
          </MeProvider>
        </TokenProvider>
    </BrowserRouter>
  ,
)
