import './about.css';
import Icon04 from '../images/Icon04.jpg';

function About() {
    return(
        <div className="a">
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={Icon04} alt='' className='a-img'/>
                </div>
            </div>
            <div className='a-right'>
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                I am a web and mobile developer specializing in creating responsive, user-friendly applications.
                I have developed a strong expertise in [React, React Native].
                </p>
                <p className='a-desc'>
                I am passionate about leveraging technology to solve problems and enhance user experiences. 
                I look forward to connecting and exploring opportunities to collaborate on innovative projects.
                </p>
            </div>
        </div>
    )
}

export default About;