'use client'
import NavbarComp from './navbar'
import FooterComp from './footer'

 
export default function Layout({ children, Heading }) {
  
  return (
    <>
    <section>
      <NavbarComp />
      <main className='max-h-full'>
      <div className='py-10'>
        <h1 style={{fontSize:"3rem", fontWeight:"bold"}} className=' text-center'> {Heading}</h1>
      </div>
        <div className=' flex justify-center '>
        {children}
        </div>
      </main>
      <FooterComp />
    </section>
    </>
  )
}