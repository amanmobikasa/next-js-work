'use client'
import NavbarComp from './navbar'
import FooterComp from './footer'
import { useState } from 'react'
 
export default function Layout({ children }) {
  

  

  return (
    <>
    <section>
      <NavbarComp />
      <main className='h-full'>
        <div className=' flex justify-center '>
        {children}
        </div>
      </main>
      <FooterComp />
    </section>
    </>
  )
}