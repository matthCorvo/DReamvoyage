import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar/index'
import SideBar from '../components/Sidebar';
import Trips from '../components/Trips/index';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <Trips/>
    <Footer/>
        </>
    )
}

export default Home
