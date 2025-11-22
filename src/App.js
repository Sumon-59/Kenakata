import React, { useEffect } from 'react';
import '@syncfusion/ej2/material.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
} from './pages';

import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    // যদি ContextProvider এ এগুলো expose করো:
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();

  // LocalStorage থেকে saved theme load করার জন্য
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor) {
      setCurrentColor(currentThemeColor);
    }
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Settings Button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Navbar & Main Content */}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
            }
          >
            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Main Content (Routes) */}
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
