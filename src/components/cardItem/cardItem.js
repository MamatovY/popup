import { useDispatch } from 'react-redux';
import './cardItem.scss'
import { changeSelect } from 'store/personalSlice';

const CardItem = ({ name, picture, email, id }) => {
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch(changeSelect(id))
    }

    return (
        <div onClick={() => handleClick(id)} className='cardItem'>
            <div className="cardItem__img">
                <img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/1352A/production/_103464197_luke-watkin.gif' alt={name} />
            </div>
            <div className="cardItem__content">
                <div className="cardItem__text">
                    <span>name:</span> {name}
                </div>
                <div className="cardItem__text">
                    <span>email:</span> {email}
                </div>
            </div>
        </div>
    )
}

export default CardItem