import './intro.css';

function Intro() {
    return(
        <div className="intro">
            <div className="intro-left">
            <div className='overlay'></div>
                <div className='intro-info'>
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Mujtaba Fadiel</h1>
                    <div className="titles">
                        <div className="titles-wrapper">
                            <div className='i-title-item'>Telecom Engineer</div>
                            <div className='i-title-item'>Front End Developer</div>
                            <div className='i-title-item'>Mobile Developer</div>
                        </div>
                    </div>
                    <p className='intro-desc'>
                        dedicated to providing top-notch solutions and services to meet clients
                        needs and achieve their goals efficintly. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro