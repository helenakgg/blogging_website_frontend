import { useDispatch, useSelector } from "react-redux"
import { useNavigate  } from "react-router-dom"
import { logout } from "../../store/slices/auth/slices"
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import logo from "../../assets/logoidea4.jpg"

export default function NavbarWithDropdown() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { username } = useSelector(state => {
          return {
        username : state.auth.username
          }
      })
    const id = localStorage.getItem("id")
    const onButtonLogout = () => {
      navigate("/login")
          dispatch(logout()) 
      } 
  
    return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand >
        <img
          alt="YourThoughts Logo"
          className="mr-3 h-6 sm:h-20"
          src={logo}         
        />
        <a onClick={() =>{navigate("/")}} className="cursor-pointer self-center whitespace-nowrap text-3xl font-semibold text-teal-600 dark:text-white">
          YourThoughts
        </a>
      </Navbar.Brand>

      <div className="flex md:order-2 ml-6">
        {id === "undefined"  || !id 
          ?  
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
            <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/login")}}>
                    Log In
                </Navbar.Link>
            </Dropdown.Item>

            <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/register")}}>
                    Register
                </Navbar.Link>
            </Dropdown.Item>
        </Dropdown>
        :

        <Dropdown
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >

              <Dropdown.Header>
                <span className="block text-sm">
                  
                </span>
                <span className="block truncate text-sm font-medium">
                { username }
                </span>
              </Dropdown.Header>

              <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/myhome")}}>
                    My Home
                </Navbar.Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/myprofile")}}>
                    My Home
                </Navbar.Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/create-blog")}}>
                    Create Article
                </Navbar.Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={() =>{navigate("/change-password")}}>
                    Change Password
                </Navbar.Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>
                <Navbar.Link className="cursor-pointer" onClick={onButtonLogout}>
                   Log Out
                </Navbar.Link>              
              </Dropdown.Item>
        
             </Dropdown>
        }
        
        {/* <Navbar.Toggle /> */}
      </div>

      
    </Navbar>
  )
}


