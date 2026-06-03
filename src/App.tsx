import React from 'react';
import './App.css';
import {createTheme, Divider, MantineProvider, Text} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import {Footer} from "./Footer/Footer";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfile from "./Pages/TalentProfile";
import PostJobPage from "./Pages/PostJobPage";
import JobDescription from "./Pages/JobDescription";


function App() {
    const theme = createTheme({
        focusRing: "never",
        primaryColor: "brightSun",
        primaryShade: 4,
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
        },
        fontFamily:"poppins, sans-serif"
    })
  return (
      <MantineProvider defaultColorScheme="dark"  theme={theme}  >
          <BrowserRouter >
              <Header />
              <Divider  size="xs" />
              <Routes>
                  <Route path="/find-jobs" element={<FindJobs/>}/>
                  <Route path="/find-talent" element={<FindTalentPage/>}/>
                  <Route path="/talent-profile" element={<TalentProfile/>}/>
                  <Route path="/jobs" element={<JobDescription/>}/>
                  <Route path="/post-job" element={<PostJobPage/>}/>
                  <Route path="*" element={<HomePage/>}/>
              </Routes>
              <Footer />
          </BrowserRouter>
      </MantineProvider>
  );
}

export default App;
