
'use client';

import { Card } from 'flowbite-react';
import { useState } from 'react';
import job_image1 from '@/../public/images/crouselimg1.avif'
import Image from 'next/image';

const CardsComp =({jobObject})=> {
    const [jobObjectState, setJobObjectState] = useState(jobObject);

    const {job_title,skills_req,job_image, exp_required, job_des, min_salary, max_salary, company,location, url, timestamp} = jobObjectState;

        // Convert the string to a Date object
    const dateObject = new Date(timestamp);

    // Get the date in the format "YYYY-MM-DD"
    const formattedDate = dateObject.toISOString().split('T')[0];

  return (
    <Card
      className="max-w-sm box-content max-h-max"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
    >
     <Image src={job_image1 ? job_image1 : job_image} className='object-cover aspect-auto' alt={job_title} />
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {job_title && job_title.slice(0, 30) }... <span className='text-xs font-[600]'><span>{(exp_required ? exp_required : "Fresher")}</span></span>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 ">
        <div>
            <h1 className='text-sm'>Min Salary : <span className='font-[600]'>{min_salary ? min_salary : "$100k"}</span> - Max Salary : <span className='font-[600]'>{max_salary ? max_salary : "$200k"}</span></h1>
        </div>
        <div className='flex flex-wrap gap-1 mt-2'>
        {
            skills_req && skills_req.map((skill,index)=>{
                return <>
                <span className="ml-1 mr-1  rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    {skill?.data} 
                </span>
                </>
            })
        }
        </div>
        
      </div>
      <div>
        <h1 className='text-xs'>Posted Date : <span className='font-bold'>{timestamp}</span></h1>
      </div>
      <div>
        <h1 className='text-xs'>Company : <span className='font-bold '>{company}</span> | Location : <span className='font-bold'>{location}</span></h1>
      </div>
      <div>
        <p>{job_des ? job_des.slice(0, 30) : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vel voluptatem recusandae mollitia"}...</p>
      </div>
      <div className="flex items-center justify-between">
        <a
          href={url}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Apply now 
        </a>
      </div>
    </Card>
  );
}
export default CardsComp;
