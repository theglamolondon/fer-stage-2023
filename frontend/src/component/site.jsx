import { useNavigate } from 'react-router-dom';
import '../assets/static/accueil.css'


const Site = ({ data, star}) =>{

    const navigate = useNavigate();

    return (
        <div className='site' onClick={() => navigate(`details/${data._id}`)} style={{backgroundImage: 'url(/src/assets/img/images.jpg)'}}>
            <div>
                <h6 className='location h6'> 
                    <i className="fas fa-map-marked o"> &nbsp;</i> 
                    {data.ville}
                </h6>
            </div>
            <div className='desc'>
                <h5 className='name h6'>{data.designation}</h5> 
                <div className='visite'>
                    <Star count={star} />
                    <span>7j/7</span>
                </div>
            </div>
        </div>
    );
    
}


const Star = ({count}) => {
    const stars = () => {
        let array = [];
        for (let i = 1; i <= 5; i++) {
            (i <= count) ? 
            array.push(<i className='fas fa-star y' key={i}></i>)
            :
            array.push(<i className='fas fa-star ' key={i}></i>);            
        }
        return array;
    }
    return (
       <span style={{letterSpacing: '3px'}}>
        {stars().map((s) => {
            return s
        })}
       </span>
    )
}

export default Site;