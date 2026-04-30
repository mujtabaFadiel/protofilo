import './porduct.css';

const Product = (props) => {
    return (
        <div className="p">
            <div className=''>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={props.link} target="_blank" rel='noreferrer'>
                {
                    !props.video ? (<img
                        src={props.img}
                        alt="pic"
                        className={props.imgMobile ? 'img-mobile' : 'img'}
                    />) : (<video
                        src={props.videoSrc}
                        className={'img-video'}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={props.img} // صورة تظهر قبل تحميل الفيديو
                    />)
                }
            </a>
            <h3>{props.title}</h3>
            <p className='pl-desc'>{props.p}</p>
        </div>
    )
}
export default Product