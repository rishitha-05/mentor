import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className="play-icon" />
            </div>
            <div className="about-right">
            <h3>ABOUT - US</h3>
            <h2>Nuturing tomorrows world</h2>
            <p>At [Your Platform Name], we believe in the transformative power of guidance and support. Our platform was created with a simple yet powerful vision: to empower individuals to reach their full potential by connecting them with experienced mentors from various fields and backgrounds. Whether youre seeking career advice, personal growth insights, or entrepreneurial guidance, we are here to guide you on your journey to success.
                Our mission is to foster growth, inspire change, and cultivate success through personalized mentoring relationships. We are committed to providing a supportive and enriching environment where mentees can gain valuable insights, acquire new skills, and overcome challenges with the guidance of seasoned professionals. Together, we aim to chart a course towards a brighter and more fulfilling future for every individual we serve.
                What sets [Your Platform Name] apart is our dedication to excellence, integrity, and innovation in mentoring. We carefully select and vet our mentors to ensure they possess the expertise, experience, and passion required to make a meaningful impact. Our platform offers a seamless and user-friendly experience, allowing you to easily find and connect with mentors who align with your goals and aspirations. With [Your Platform Name], youre not just getting advice; youre gaining a trusted partner committed to your success.
            </p>
            </div>
        </div>
    )
}
export default About;