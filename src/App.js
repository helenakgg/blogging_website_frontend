import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { keepLogin } from "./store/slices/auth/slices"
import ProtectedRoute from "./protected.routes"

// @import pages
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"
import BlogsPage from "./pages/blogs"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import VerifyAccountPage from "./pages/verify-account"
import ForgotPasswordPage from "./pages/forgot-password"
import ResetPasswordPage from "./pages/reset-password"

// @import pages (protected)
import MyHomePage from "./pages/home/my-home"
import MyProfilePage from "./pages/my-profile"
import CreateBlogPage from "./pages/create-blog"
import ChangePasswordPage from "./pages/change-password"

// @import components
import Navbar from "./components/navbar"


function App() {
	document.title = 'YourThoughts'
	const dispatch = useDispatch()
	const { isKeepLoginLoading } = useSelector(state => {
		return {
			isKeepLoginLoading : state.auth?.isKeepLoginLoading
		}
	})

	useEffect(() => {
		dispatch(keepLogin())
	}, [])

	if (isKeepLoginLoading) return (
		<div className="h-screen w-screen flex flex-row align-bottom justify-center">
			<span className="loading loading-spinner loading-md"></span>
			<button type="button" className="bg-teal-500 ..." disabled>
 				<svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/>
    			Processing...
			</button>
		</div>
	)
		
  	return (
		<div className="w-full h-[900px] px-40">
			<Navbar/>
			<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="*" element={<NotFoundPage/>}/>
					<Route path="/blogs" element={<BlogsPage/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/verification/:token" element={<VerifyAccountPage/>}/>
					<Route path="/verification-change-email/:token" element={<VerifyAccountPage/>}/>
					<Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
					<Route path="/reset-password" element={<ResetPasswordPage/>}/>

					<Route 
						path="/myhome" 
						element={
							<ProtectedRoute>	
								<MyHomePage/>
							</ProtectedRoute>
							}
					/>
					<Route 
						path="/myprofile" 
						element={
							<ProtectedRoute>
								<MyProfilePage/>
							</ProtectedRoute>
							}
						/>
					<Route 
						path="/create-blog" 
						element={
							<ProtectedRoute>
								<CreateBlogPage/>
							</ProtectedRoute>
							}
						/>
					<Route 
						path="/change-password" 
						element={
							<ProtectedRoute>
								<ChangePasswordPage/>
							</ProtectedRoute>
							}
						/>					
				</Routes>
				<Toaster/>
		</div>
  	);
}

export default App;
