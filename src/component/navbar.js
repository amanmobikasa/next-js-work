'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {  ListGroup, Navbar, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';
import logo from '@/../public/images/logo.jpg'
import Image from 'next/image';
import ListGroupComp from './listgroup';



const NavbarComp =()=> {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("")
  const [globalJobData, setGlobalData] = useState([]);
  const[filterJobDataState, setFilterJobDataState] = useState([]); 
  

  useEffect(()=>{
    const get_jobs_data = JSON.parse(sessionStorage.getItem("jobResultState"))
    if(get_jobs_data){
      setGlobalData(get_jobs_data)
    }
  },[]);

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    router.push('/login'); // Redirect to the login page or any other desired page after logout.
    alert('Logged out successfully.'); // Add your desired logging logic here. For example, you can log a message to the console.
  }


  useEffect(() => {
    // Filter the data based on the search input value.
    if (globalJobData.length > 0) {
      const filteredData = globalJobData.filter((item) =>
        item.job_title.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setFilterJobDataState(filteredData);
    }
  }, [inputSearch, globalJobData]);

  console.log("search Result", filterJobDataState);

  const handleSearchInput = (event)=> {
    const {value} = event.target
    setInputSearch(value);
  }

 



  // useEffect(()=>{
  //   if(!sessionStorage.getItem('accessToken')){
  //     router.push('/login')
  //   }
  //   else{
  //     router.push('/')
  //   } 
  // },[])

  return <>
    <Navbar className='bg-gray-100 shadow-sm ' fluid rounded>
      <Navbar.Brand as={Link} href="/" className='space-x-4'>
        {/* <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <div className='rounded h-fit w-fit'>
           <Image  src={logo} alt="Job Portal Logo" width={50} height={10}/>
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Job Portal</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='items-center flex'>
        <div className='flex items-center '>
          <TextInput onChange={handleSearchInput} value={inputSearch} className='rounded-none w-8/12' type='text' placeholder='search here...'/>
          {/* <button className=''>Search</button> */}
        </div>
        <Navbar.Link as={Link} href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="">
          about
        </Navbar.Link>
        <Navbar.Link as={Link} href='/login'>login</Navbar.Link>
        <Navbar.Link onClick={handleLogout} >logout</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div className="">
      {filterJobDataState.length > 0 && inputSearch !== '' && (
        <ListGroupComp filterJobDataState={filterJobDataState} />
      )}
    </div>
    
  </>
}
export default NavbarComp;
