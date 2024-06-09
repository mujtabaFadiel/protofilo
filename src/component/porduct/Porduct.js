import './porduct.css';

const Product = (props) => {
    return(
        <div className="p">
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={props.link} target="_blank" rel='noreferrer'>
                <img src={props.img} alt="pic" />
            </a>
            <p>{props.title}</p>
        </div>
    )
}
export default Product