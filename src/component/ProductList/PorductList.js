import Product from '../porduct/Porduct';
import './porductList.css';
import project1 from '../../images/project1.PNG'
import project2 from '../../images/project2.PNG'
// استيراد صور المشاريع الجديدة (تأكد من الأسماء الصحيحة للصور)
import chatImg from '../../images/chat-app.jpeg'
import chatapp from '../../images/chatapp.jpg'
import chatDbImg from '../../images/chatDbImg.png'
import videoDemo from '../../images/videoDemo.mp4'

function PorductList() {
    return (
        <div className="pl">
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire</h1>
                <p className='pl-desc'>
                    Explore my latest Full-Stack and Mobile development projects.
                </p>
            </div>
            <div className='pl-list'>
                <Product
                    title="Wave Social App"
                    p="Register & Login (JWT Auth)
                    Create posts
                    Like & Comment
                    Follow users
                    View feed (following users only)"
                    link="https://github.com/mujtabaFadiel/Wave-App" // رابط المستودع
                    img={chatImg}
                    imgMobile
                />

                <Product
                    title="ChatApp FrontEnd"
                    p="Developed a high-performance, real-time messaging application 
                    using NestJS for the backend and React Native for the mobile interface.
                    "
                    link="https://github.com/mujtabaFadiel/chat-app-frontend" // رابط المستودع
                    img={chatapp}
                    video
                    videoSrc={videoDemo}
                    imgVideo
                />

                {/* مشروع الـ Chat App الجديد */}
                <Product
                    title="ChatApp Backend"
                    link="https://github.com/mujtabaFadiel/chat-app-backend"
                    img={chatDbImg}
                    p="Real-Time Chat Backend

                    - Built with NestJS and WebSocket (Socket.IO)
                    - JWT authentication and PostgreSQL database
                    - Private messaging using rooms"
                />

                {/* مشاريعك السابقة */}
                <Product
                    title="landing page"
                    link="https://mujtabafadiel.github.io/react-js/"
                    img={project1}
                />
                <Product
                    title="ebook landingPage"
                    link="https://mujtabafadiel.github.io/ebook-Templete/"
                    img={project2}
                />
            </div>
        </div>
    )
}
export default PorductList;