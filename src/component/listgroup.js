'use client';
import React, { useState } from 'react'
import { ListGroup } from 'flowbite-react';

const ListGroupComp=({filterJobDataState})=> {
    const [inputSearch, setInputSearch] = useState(filterJobDataState);
    console.log("search list", inputSearch)
  return (
    <div  style={{position:"absolute", right:"25rem"}} className="z-10  main-list-container">
      <ListGroup style={{width:"130%"}} className="">
      {
        inputSearch && inputSearch.map((job_obj, i)=>{
            return <>
            <ListGroup.Item key={i}>{job_obj.job_title}</ListGroup.Item>
            </>
        })
      }
      </ListGroup>
    </div>
  );
}
export default ListGroupComp;
