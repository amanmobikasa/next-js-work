import { Inter } from "next/font/google";
import Layout from "@/component/layout";

import CardsComp from "@/component/cards";
import { useEffect, useState } from "react";
import { useFetchData } from "@/customhook/useGetData";
import axios from "axios";
import CrouselComp from "@/component/crousel";
import job_api from "@/json/job_api";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [jobResultState, setJobResultState] = useState([]);
  // const {data,error,loading} = useFetchData("https://learnkoodsapi.onrender.com/jobs_api/");


  // const getJobsData = async () => {
  //   try {
  //     const response = await axios.get('https://learnkoodsapi.onrender.com/jobs_api/',
  //     {
  //       headers: {
  //         Authorization : `Bearer ${sessionStorage.getItem("accessToken")}`,
  //       }
  //     }
  //     );
  //     console.log("response JOb", response);

  //     if (response.data.success) {
  //       // You can access the jobs data here
  //       const jobsData = response.data.data;
  //       console.log('Jobs Data:', jobsData);
  //     } else {
  //       console.error('Error while fetching jobs data');
  //     }
  //   } catch (error) {
  //     console.error('Error while fetching jobs data', error);
  //   }
  // };

  useEffect(()=>{
    if(job_api){
      const {results} = job_api;
      setJobResultState(results);
    }
  },[job_api])

  console.log("jobResultState", jobResultState);

  const getJobsData = async () => {
    try {
      const response = await axios.get('https://learnkoodsapi.onrender.com/jobs_api/', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        }
      });
      console.log("response Job", response);
  
      if (response.data.success) {
        // You can access the jobs data here
        const jobsData = response.data.data;
        console.log('Jobs Data:', jobsData);
      } else {
        console.error('Error while fetching jobs data');
      }
    } catch (error) {
      console.error('Error while fetching jobs data', error);
    }
  };


// Call the function to make the API request
useEffect(()=>{
  getJobsData();
},[])



  return (
    <>
      <Layout>
        <section className="w-11/12 mx-auto bg-gray-50 space-y-[2rem]">
        <div>
            {/* <CrouselComp/> */}
        </div>
          <div>
            <h1 className="text-center text-[2rem] font-[500]">Here is show all the jobs</h1>
          </div>
          <div className="contaon-cards w-11/12 mx-auto h-full grid grid-cols-3 justify-evenly gap-[2rem] overflow-hidden">
           
           {
            jobResultState.length > 0 && jobResultState?.map((job_obj, i)=>{
              return<>
              <div>
                <CardsComp jobObject={job_obj} key={i} />
              </div> 
              </>
            })
           }
            
          </div>
        </section>
      </Layout>
    </>
  );
}
