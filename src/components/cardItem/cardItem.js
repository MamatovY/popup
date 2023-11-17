import { useDispatch } from 'react-redux';
import './cardItem.scss'
import { changeSelect } from 'store/personalSlice';
import { motion } from 'framer-motion';

const CardItem = ({ name, picture, email, _id }) => {
    const dispatch = useDispatch()
    const handleClick = (_id) => {
        dispatch(changeSelect(_id))
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            onClick={() => handleClick(_id)}
            className='cardItem'>
            <div className="cardItem__img">
                <img src={picture} alt={name} />
            </div>
            <div className="cardItem__content">
                <div className="cardItem__text">
                    <span>name:</span> {name}
                </div>
                <div className="cardItem__text">
                    <span>email:</span> {email}
                </div>
            </div>
        </motion.div>
    )
}

export default CardItem