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
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

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
                    <Route path="/talent-profile/:id" element={<TalentProfile/>}/>
                    <Route path="/apply-job/:id" element={<ApplyJob/>}/>
                    <Route path="/company/:name" element={<CompanyPage/>}/>
                    <Route path="/job-history" element={<ProtectedRoutes allowedRoles={['APPLICANT']}><JobHistoryPage/></ProtectedRoutes>}/>
                    <Route path="/signup" element={<PublicRoutes><SignUpPage/></PublicRoutes>}/>
                    <Route path="/login" element={<PublicRoutes><SignUpPage/></PublicRoutes>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/posted-jobs/:id" element={<ProtectedRoutes allowedRoles={['EMPLOYER']}><PostedJobPage/></ProtectedRoutes>}/>
                    <Route path="/jobs/:id" element={<JobDescription/>}/>
                    <Route path="/post-job/:id" element={<ProtectedRoutes allowedRoles={['EMPLOYER']}><PostJobPage/></ProtectedRoutes>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default AppRoutes
