import './about.css';
import Icon04 from '../images/Icon04.jpg';

function About() {
    return (
        <div>
            <div className="a">
                <div className='a-left'>
                    <div className='a-card bg'></div>
                    <div className='a-card'>
                        <img src={Icon04} alt='' className='a-img' />
                    </div>
                </div>
                <div className='a-right'>
                    <h1 className="a-title">About Me</h1>
                    <p className="a-desc">
                        I am a Web and Mobile Developer specializing in building integrated,
                        high-efficiency systems.
                        I focus primarily on Application Logic and Data Architecture,
                        with extensive experience in developing Full-Stack applications
                        using NestJS for backend systems and React Native for mobile platforms.
                    </p>
                    <p className='a-desc'>
                        As a Telcommunications Engineer,
                        I combine deep technical knowledge with innovative software solution
                        capabilities
                    </p>
                </div>


            </div>
            <div className='b' >
                <div>
                    <h1 className="a-title">Skills</h1>
                    <ul>
                        <li className='a-desc2'>Backend: NestJS, Node.js, PostgreSQL, TypeORM</li>
                        <li className='a-desc2'>Mobile: React Native</li>
                        <li className='a-desc2'>Frontend: React.js, JavaScript (ES6+), TypeScript</li>
                        <li className='a-desc2'>Tools: GitHub, REST APIs, Database Design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;