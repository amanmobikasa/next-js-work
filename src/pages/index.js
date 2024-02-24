import { Inter } from "next/font/google";
import Layout from "@/component/layout";
import CardsComp from "@/component/cards";
import { useCallback, useEffect, useState } from "react";
import { useFetchData } from "@/customhook/useGetData";
import axios from "axios";
import CrouselComp from "@/component/crousel";
import job_api from "@/json/job_api";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [jobResultState, setJobResultState] = useState([]);
  const [sorting, setSorting] = useState(null);
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

  // useEffect(()=>{
  //   if(job_api){
  //     const {results} = job_api;
  //     // setJobResultState(results);
      
  //     setJobResultState((prev)=>{
  //       const sortedJobs = results.sort((a, b) => {
  //         return sorting === 'desc' ? new Date(b.timestamp) - new Date(a.timestamp) : new Date(a.timestamp) - new Date(b.timestamp);
  //       });
  //       return sortedJobs;
  //     });
  //     sessionStorage.setItem("jobResultState", JSON.stringify(jobResultState));
  //   }
  // },[job_api, sorting])



  // const getJobsData = async () => {
  //   try {
  //     const response = await axios.get('https://learnkoodsapi.onrender.com/jobs_api/', {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  //       }
  //     });
  //     console.log("response Job", response);
  
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

  // console.log("api data", job_api);
  useEffect(()=>{
      const {results} = job_api;
      setJobResultState(()=>{
        sessionStorage.setItem("jobResultState", JSON.stringify(results));
        return results
      });
  },[job_api])

  const sortJobs = useCallback((order) => {
    const sortedJobs = [...jobResultState].sort((a, b) => {
      return order === 'desc' ? new Date(b.timestamp) - new Date(a.timestamp) : new Date(a.timestamp) - new Date(b.timestamp);
    });
    setJobResultState(sortedJobs);
    // setSorting(order);
  }, [jobResultState]);

  const handleDescSorting = useCallback(() => {
    sortJobs('desc');
    setSorting("desc")
  }, [sortJobs]);

  const handleAscSorting = useCallback(() => {
    sortJobs('asc');
    setSorting("asc")
  }, [sortJobs]);

  console.log("sortingdata", jobResultState)



  return (
    <>
      <Layout >
        <section className="w-11/12 mx-auto bg-gray-50 space-y-[2rem]">
        <div>
            {/* <CrouselComp/> */}
        </div>
        <div className="w-full relative ">
          <div className="flex justify-center ">
            <h1 className="text-center text-[2rem] font-[500]">Here is show all the jobs</h1>
          </div>
            <div className="flex justify-end px-[2rem]">
            <div className="flex items-center gap-x-3">
              <h1>Sort By : <span>Date</span></h1>
              <button onClick={handleDescSorting } className={`bg-gray-200 px-3 py-2 text-sm rounded-md font-bold ${sorting === "desc" ? "bg-red-500 text-white" : ""}`}>Desc</button>
              <button onClick={handleAscSorting} className={`bg-gray-200 px-3 py-2 text-sm rounded-md font-bold ${sorting === "asc" ? "bg-red-500 text-white" : ""}`}>Asc</button>
            </div>
            </div>
        </div>
          
          <div className="contaon-cards w-11/12 mx-auto h-full grid grid-cols-3 justify-evenly gap-[2rem] overflow-hidden">
           
           {
            jobResultState.length > 0 && jobResultState?.map((job_obj, i)=>{
              return<>
              <div>
                <CardsComp jobObject={job_obj} key={job_obj?.job_id} />
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
