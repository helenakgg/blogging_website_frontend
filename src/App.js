// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

// @import pages
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"
import ArticlePage from "./pages/article"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import VerifyAccountPage from "./pages/verify-account"
import ForgotPasswordPage from "./pages/forgot-password"
import ResetPasswordPage from "./pages/reset-password"

// @import pages (protected)
import MyHomePage from "./pages/home/my-home"
import MyProfilePage from "./pages/my-profile"
import EditProfile from "./pages/edit-profile"
import CreateBlogPage from "./pages/create-blog"
import ChangePasswordPage from "./pages/change-password"


// @import components

import Navbar from "./components/navbar"

// @import action


function App() {
  // @hooks
	
  return (
    <div className="App">
        <Navbar/>
        <Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
				<Route path="/article" element={<ArticlePage/>}/>
				<Route path="/register" element={<RegisterPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
				<Route path="/verification/:token" element={<VerifyAccountPage/>}/>
				<Route path="/verification-change-email/:token" element={<VerifyAccountPage/>}/>
				<Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
				<Route path="/reset-password" element={<ResetPasswordPage/>}/>

				<Route path="/myhome" element={<MyHomePage/>}/>
				<Route path="/myprofile" element={<MyProfilePage/>}/>
				<Route path="/edit-profile" element={<EditProfile/>}/>
				<Route path="/create-blog" element={<CreateBlogPage/>}/>
				<Route path="/change-password" element={<ChangePasswordPage/>}/>
				
			</Routes>
    </div>
  );
}

export default App;
