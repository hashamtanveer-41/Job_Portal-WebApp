import React from 'react'
import Header from "../Components/Header/Header";
import {Divider} from "@mantine/core";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FindJobs from "./FindJobs";
import FindTalentPage from "./FindTalentPage";
import TalentProfile from "./TalentProfile";
import ApplyJob from "./ApplyJob";
import CompanyPage from "./CompanyPage";
import JobHistoryPage from "./JobHistoryPage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import PostedJobPage from "./PostedJobPage";
import JobDescription from "./JobDescription";
import PostJobPage from "./PostJobPage";
import HomePage from "./HomePage";
import {Footer} from "../Components/Footer/Footer";
import {useSelector} from "react-redux";

const AppRoutes = () => {
    const {user} = useSelector((state:any)=> state.auth);
    return (
        <BrowserRouter >
            <div className="relative">
                <Header />
                <Divider  size="xs" />
                <Routes>
                    <Route path="/find-jobs" element={<FindJobs/>}/>
                    <Route path="/find-talent" element={<FindTalentPage/>}/>
                    <Route path="/talent-profile" element={<TalentProfile/>}/>
                    <Route path="/apply-job/:id" element={<ApplyJob/>}/>
                    <Route path="/company/:name" element={<CompanyPage/>}/>
                    <Route path="/job-history" element={<JobHistoryPage/>}/>
                    <Route path="/signup" element={user? <Navigate to="/"/>:<SignUpPage/>}/>
                    <Route path="/login" element={user?  <Navigate to="/"/>:<SignUpPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/posted-jobs/:id" element={<PostedJobPage/>}/>
                    <Route path="/jobs/:id" element={<JobDescription/>}/>
                    <Route path="/post-job" element={<PostJobPage/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRoutes
