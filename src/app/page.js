'use client';
import React from 'react'
import OurServices from './components/our-services/ourservices';
import OurSolutions from './components/our-solutions/oursolutions';
import ContactForm from './components/contact-form/contactform';
import ClientsCount from './components/happy-clients/happyclients';
import WhyUs from './components/why-us/whyus';
import Testimonials from './components/testimonials/testminials';
import Hero2 from './components/hero2/hero2';
import CompanyCulture from './components/company-culture/comapnyCulture';
import { BackgroundBoxesDemo } from './components/backgroundBoxesBg';
import CompanyTimeline from './components/company-culture/comapnyCulture';


const Home = () => {
  return (
    <>
    {/* <Hero2/> */}
    <BackgroundBoxesDemo/>
    <ClientsCount/>
     <OurServices/>
    <OurSolutions/>
    <WhyUs/>
    <CompanyTimeline/>
    <Testimonials/>
    <ContactForm/> 
    
    
    </>
  )
}
export default Home