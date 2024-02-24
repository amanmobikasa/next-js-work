
'use client';

import { Carousel } from 'flowbite-react';
import carousel1 from '@/../public/images/crouselimg1.avif'
import carousel2 from '@/../public/images/crouselimg2.avif'
import carousel3 from '@/../public/images/crouselimg3.avif'
import carousel4 from '@/../public/images/crouselimg4.avif'
import Image from 'next/image';


const CrouselComp =()=> {
  return (
    <div className="h-[30rem]">
      <Carousel>
        {
            crousel_img &&crousel_img.map((img, i)=>{
                return <>
                    <Image src={img.imgUrl} alt={img.alt} height={40} width={100}/>
                </>
            })
        }
      </Carousel>
    </div>
  );
}

export default CrouselComp;

const crousel_img = [
    {
        id : 1,
        imgUrl : carousel1,
        alt : "crousel image 1"
    },
    {
        id : 2,
        imgUrl : carousel2,
        alt : "crousel image 2"

    },
    {
        id : 3,
        imgUrl : carousel3,
        alt : "crousel image 3"

    },
    {
        id : 4,
        imgUrl : carousel4,
        alt : "crousel image 4"

    }
]
