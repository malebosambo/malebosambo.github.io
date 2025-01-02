import React from 'react';
import './App.css';
import Home from './features/home';
import CurriculumVitae from './features/curriculumVitae'; 
import Repositories from './features/repositories';
import ViewRepo from './features/viewRepo';
import WebsiteApps from './features/websiteApps';
import MobileApps from './features/mobileApps';
import ContactUs from './features/contactUs';
import Header from './components/header';
import Footer from './components/footer';

export function App() {
  return (
    <div>
      <div>
        <Header />
      </div> 
      <Home />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export function CVresume() {
  return (
    <div>
      <div>
        <Header /> 
      </div> 
      <CurriculumVitae />
      <div>
        <Footer />
      </div>
    </div>
  )                                          
}

export function Repos() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Repositories />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export function Web() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <WebsiteApps />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function Apps() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <MobileApps />
      <div>
        <Footer />
      </div>  
    </div>
  )
}

export function ViewRepository() {
  return (
    <div>
      <div>
        <Header /> 
      </div> 
      <ViewRepo />
      <div>
        <Footer />
      </div>  
    </div>
  )
}
        
export function Contacts() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <ContactUs />
      <div>
        <Footer />
      </div>
    </div>
  )
}
