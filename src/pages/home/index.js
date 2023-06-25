import { Dropdown } from 'flowbite-react';
import Footer from "../../components/footer/index";
import './index.css';

export default function HomePage () {

    return (
    <div> 
        <div className='flex-container-filter'>

        <div className='flex-filter-item'>
        <Dropdown label="Categories" >
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Bisnis
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Ekonomi
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Teknologi
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Olahraga
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Kuliner
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Internasional
                </a>
            </Dropdown.Item>
            <Dropdown.Item>
                <a href="#" className="text-lg ">
                Fiksi
                </a>
            </Dropdown.Item>
        </Dropdown>
        </div>

        <div className='flex-filter-item'>
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
        </div>
        </div>
        <Footer/>
    </div>
    )
}