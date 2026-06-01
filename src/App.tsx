import React from 'react';
import './App.css';
import {createTheme, MantineProvider, Text} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const theme = createTheme({
        colors: {
            'mine-shaft': [
                '#fafafa', // 50
                '#f5f5f5', // 100
                '#e6e6e6', // 200
                '#d6d6d6', // 300
                '#a5a5a5', // 400
                '#767676', // 500
                '#575757', // 600
                '#434343', // 700
                '#2d2d2d', // 800
                '#1a1a1a', // 900
                '#0a0a0a'  // 950
            ],
            'brightSun': [
                '#fffbeb',
                '#fff3c6',
                '#ffe588',
                '#ffd149',
                '#ffbd20',
                '#f99b07',
                '#dd7302',
                '#b74f06',
                '#943d0c',
                '#7a320d',
                '#461802'
            ]
        }
    })
  return (
      <MantineProvider theme={theme}  >
          <BrowserRouter >
              <Routes>
                  <Route path="*" element={<HomePage/>}/>
              </Routes>
          </BrowserRouter>
      </MantineProvider>
  );
}

export default App;
