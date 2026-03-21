import React, { Fragment } from 'react'
import Header from '@/components/Header'
import Photo from '@/components/Photo'
import Brand from '@/components/Brand'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Blogs from '@/components/Blogs'
import Collaboraters from '@/components/Collaborators'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <Fragment>
   
    <Photo />
    <Brand/>
    <About/>
    <Services/>
    <Portfolio/>
    <Blogs/>
    <Collaboraters/>
    <Testimonials/>
   
    
    </Fragment>
  )
}

export default page
