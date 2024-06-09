import { useRef, useState, useContext } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { ThemeContext} from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, SetDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handelSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_a5v51ui', 
                'template_xclosye', 
                formRef.current, {
        publicKey: 'TjoGT_eCHlcpO2wfc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    const handelClick = () => {
        SetDone(true)
    }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                             src="https://th.bing.com/th/id/OIP.bhlUB1eQfmysmFtQb71JCAHaHa?rs=1&pid=ImgDetMain" 
                             alt="pic" 
                             className="c-icon" />
                             +249 907380073
                        </div>
                        <div className="c-info-item">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/14025/14025925.png" 
                            alt="pic" 
                            className="c-icon" />
                             mujtabafadiel@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                            src="https://static.vecteezy.com/system/resources/previews/000/440/480/original/vector-location-icon.jpg" 
                            alt="pic" 
                            className="c-icon" />
                            Muscat, Oman 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing
                        right project come along me
                    </p>
                    <form ref={formRef} onSubmit={handelSubmit}>
                        <input style={{ backgroundColor: !darkMode && "#333", color: !darkMode && "white" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: !darkMode && "#333", color: !darkMode && "white" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: !darkMode && "#333", color: !darkMode && "white" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: !darkMode && "#333", color: !darkMode && "white" }} rows="5" placeholder='Message' name='message'></textarea>
                        <button onClick={handelClick}>Submit</button>
                        { done && 'Thank You...' }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;