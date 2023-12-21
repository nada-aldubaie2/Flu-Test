import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../Component/Header'
import MainContent from '../Component/MainContent'
import Footer from '../Component/Footer'
import { Element } from 'react-scroll'
import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <div className="grid grid-rows-[20vh_minmax(900px,_1fr)_10vh] grid-cols-1 min-h-screen bg-slate-100 ">
      {/* <Helmet>
        <title>Home Page </title>
      </Helmet> */}
      <Header />
      <MainContent />
      <Element name="footer" className=' min-h-full'>
        <Footer />
      </Element>
    </div>
  )
}
