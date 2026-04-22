import Product from '../porduct/Porduct';
import './porductList.css';
import project1 from '../../images/project1.PNG'
import project2 from '../../images/project2.PNG'
// استيراد صور المشاريع الجديدة (تأكد من الأسماء الصحيحة للصور)
import chatImg from '../../images/chat-app.jpeg' 
import chatDbImg from '../../images/chatDbImg.png'

function PorductList() {
    return(
        <div className="pl">
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire</h1>
                <p className='pl-desc'>
                    Explore my latest Full-Stack and Mobile development projects.
                </p>
            </div>
            <div className='pl-list'>
                {/* مشروع الـ Social App الجديد */}
                <Product 
                  title="Wave Social App"
                  link="https://github.com/mujtabaFadiel/Wave-App" // رابط المستودع
                  img={chatImg}
                  imgMobile
                />

                {/* مشروع الـ Chat App الجديد */}
                <Product 
                  title="Real-Time Chat Backend"
                  link="https://github.com/mujtabaFadiel/chat-app-backend" 
                  img={chatDbImg}
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