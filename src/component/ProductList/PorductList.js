import Product from '../porduct/Porduct';
import './porductList.css';
import project1 from '../../images/project1.PNG'
import project2 from '../../images/project2.PNG'

function PorductList() {
    return(
        <div className="pl">
            <div className='pl-texts'>
                <h1 className='pl-title'> Create & inspire</h1>
                <p className='pl-desc'>
                  My previous projects 
                </p>
            </div>
            <div className='pl-list'>
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