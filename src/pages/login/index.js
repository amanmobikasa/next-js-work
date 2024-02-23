
import { Button, Label, TextInput } from 'flowbite-react';
import Layout from '@/component/layout';
import { GlobalPostData } from '@/customhook/usePostData';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Login = () => {

  const [loginData , setLoginData] = useState({}) // initial state of login data
  // const {isLoading,postData,response} = GlobalPostData()
  const [response, setResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({...loginData , [e.target.name] : e.target.value}) 
  }

  console.log("logindata", loginData)

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
            "Content-Type": "application/json",
          },
        }
      );
  
      // Handle the successful response
      console.log("res",res);
      setIsLoading(false); // setting the loading to false
      setResponse(res) // setting the resp 
    } catch (error) {
      // Handle the error
      console.error("Something went wrong while logging in the user", error);
    }
  };
  

  // useEffect(()=>{
  //   if(response){
  //     const {refresh, access} = response.data;
  //     access && sessionStorage.setItem("accessToken", access);
  //     refresh && sessionStorage.setItem("refreshToken", refresh);
  //     router.push("/");
  //   }
  // },[response])



  return (
    <Layout >
    <form onSubmit={handleSubmit} className="flex w-1/2 md:w-[45%] max-w-md flex-col gap-4 justify-center ">
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
      <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
    </form>
    </Layout>
  );
}

export default Login;
