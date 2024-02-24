
'use client';
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import Layout from '@/component/layout';
import { GlobalPostData } from '@/customhook/usePostData';
import { useRouter } from 'next/router';

const SignUp = ()=> {

    const [signUpData, setSignUpData] = useState({}); // initial state
    const {error,isLoading,message,postData,response} = GlobalPostData() // custom hook of post data and handle the response, error and loading
    const router = useRouter() // use router

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setSignUpData({ ...signUpData, [name]: value });
    }
    console.log("onchange", signUpData)

    const handleSubmitForm = (event) => {
        event.preventDefault();
        try {
            postData("https://learnkoodsapi.onrender.com/user_api/", {
                username : `${signUpData?.first_name}${signUpData?.last_name}`,
                email : signUpData?.user_email,
                first_name : signUpData?.first_name,
                last_name : signUpData?.last_name,
                password : signUpData?.user_password,
            }); 

        } catch (error) {
            console.log("something went wrong while signup the user",error);
        }
    }

    useEffect(()=>{
        if(response){
            const {message, access, refresh} = response; 
            access && sessionStorage.setItem("accessToken", access);
            refresh && sessionStorage.setItem("refreshToken", refresh);
            message && alert(message);
            router.push("/login");
        }
    },[response]);

  return (
    <Layout>
        <form onSubmit={handleSubmitForm} className="flex max-w-md w-1/2 !md:w-[45%] flex-col gap-4">
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email2" value="First Name" />
            </div>
            <TextInput onChange={handleChangeInput} value={signUpData?.first_name} name='first_name' id="email2" type="text" placeholder="John" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email2" value="Last Name" />
            </div>
            <TextInput onChange={handleChangeInput}  name='last_name' value={signUpData?.last_name} id="email2" type="text" placeholder="Doe" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput onChange={handleChangeInput}  name='user_email' value={signUpData?.user_email}  id="email2" type="email" placeholder="name@flowbite.com" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput onChange={handleChangeInput}  name='user_password' value={signUpData?.user_password} id="password2" type="password" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput onChange={handleChangeInput}  name='repeat_password' value={signUpData?.repeat_password} id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
            </Link>
            </Label>
        </div>
        <Button type="submit">{isLoading ? "Loading..." : "Register new account"}</Button>
        </form>
    </Layout>
  );
}

export default SignUp;
