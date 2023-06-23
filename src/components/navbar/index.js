
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import logo from "../../assets/logoidea4.jpg"

export default function NavbarWithDropdown() {
   
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
          href="#"
        />
        <span className="self-center whitespace-nowrap text-3xl font-semibold text-teal-600 dark:text-white">
          YourThoughts
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ml-6">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="ml-auto">      
        <Dropdown label="Categories" >
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                BisnisTEST
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Ekonomi
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Teknologi
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Olahraga
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Kuliner
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Internasional
                </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Navbar.Link href="#" className="text-lg ">
                Fiksi
                </Navbar.Link>
            </Dropdown.Item>
      </Dropdown>
      <form>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="search" id="default-search" className="block w-full md:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search Title, Categories..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Search</button>
        </div>
        </form>


      </Navbar.Collapse>
    </Navbar>
  )
}


