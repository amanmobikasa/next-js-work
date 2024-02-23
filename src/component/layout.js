'use client'
import NavbarComp from './navbar'
import FooterComp from './footer'
 
export default function Layout({ children }) {
  return (
    <>
    <section>
      <NavbarComp />
      <main className='w-full h-full '>
        <div className='w-11/12 mx-auto'>
        {children}
        </div>
      </main>
      <FooterComp />
    </section>
    </>
  )
}