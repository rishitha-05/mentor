import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import BodyHomepage from './Components/BodyHomepage/BodyHomepage'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
    return (
        <div>
            <Navbar />
            <BodyHomepage />
            <div className="container">
                <About />
                <Title subTitle='TESTIMONIALS' title='What They Say' />
                <Testimonials />
                <Title subTitle='CONTACT US' title='Get in Touch ' />
                <Contact />
                <Footer/>
            </div>
        </div>
    )
}

export default App;