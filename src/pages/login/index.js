
import { Button, Label, TextInput } from 'flowbite-react';
import Layout from '@/component/layout';
import { GlobalPostData } from '@/customhook/usePostData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Login = () => {

  const [loginData , setLoginData] = useState({}) // initial state of login data
  // const {isLoading,postData,response} = GlobalPostData()
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setLoginData({...loginData , [e.target.name] : e.target.value}) 
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // setting the loading to true
    try {
      const res = await axios.post(
        "https://learnkoodsapi.onrender.com/login_api/",
        {
          username: loginData.username,
          password: loginData.password,
        },
        {
          headers: {
            Authorization : `Bearer ${sessionStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
            
          },
        }
      );
  
      // Handle the successful response
      console.log("res",res);
      setIsLoading(false); // setting the loading to false
      setResponse(res.data) // setting the resp 
    } catch (error) {
      // Handle the error
      console.error("Something went wrong while logging in the user", error);
    }
  };
  

  useEffect(()=>{
    if(response !== null){
      const {refresh, access, username, email} = response;
      access && sessionStorage.setItem("accessToken", access);
      refresh && sessionStorage.setItem("refreshToken", refresh);
      router.push("/");
    }
  },[response])

  // useEffect(() => {
  //   if (sessionStorage.getItem("accessToken")) {
  //     router.push("/");
  //   }
  // }, []);



  return (
    <Layout Heading={"Login For User"}>
    <section className='h-screen w-full'>
    <form onSubmit={handleSubmit} className="flex w-1/2 md:w-[45%] mx-auto max-w-md flex-col gap-4 h-full mt-[3rem]">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="User Name" />
        </div>
        <TextInput name='username' value={loginData.username} onChange={handleChange} id="username" type="text" placeholder="Johndoe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput name='password' value={loginData.password} onChange={handleChange} id="password1" type="password" required />
      </div>
      <div>
        <Link href={"/signup"}>
          <p className='text-xs font-[400] '>New User! Navigate to SignUp</p>
        </Link>
      </div>
      <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
    </form>
    </section>
    </Layout>
  );
}

export default Login;
