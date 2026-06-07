import React from 'react';
import './App.css';
import {createTheme, Divider, MantineProvider, Text} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindJobs from "./Pages/FindJobs";
import Header from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfile from "./Pages/TalentProfile";
import PostJobPage from "./Pages/PostJobPage";
import JobDescription from "./Pages/JobDescription";
import ApplyJob from "./Pages/ApplyJob";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUp from "./Components/SignUpLogin/SignUp";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import {Notifications} from "@mantine/notifications";
import AppRoutes from "./Pages/AppRoutes";


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
          <Notifications position="top-center" zIndex={1000}/>
          <AppRoutes />
      </MantineProvider>
  );
}

export default App;
