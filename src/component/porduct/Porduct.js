import './porduct.css';

const Product = (props) => {
    return(
        <div className="p">
            <div className=''>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={props.link} target="_blank" rel='noreferrer'>
                <img 
                    src={props.img} 
                    alt="pic" 
                    className={props.imgMobile ? 'img-mobile' : 'img'}
                />
            </a>
            <p>{props.title}</p>
        </div>
    )
}
export default Product