import { useDispatch, useSelector } from 'react-redux'
import './popup.scss'
import { changeSelect } from 'store/personalSlice'
import { motion } from 'framer-motion'

const Popup = () => {
    const { selectId, personal } = useSelector(state => state.personal)

    // Поиск элемента в массиве персонала по идентификатору selectId
    const item = personal.find(item => item.id === selectId);

    const dispatch = useDispatch()

    // Обработчик события для закрытия всплывающего окна
    const handleClose = () => dispatch(changeSelect(''))
    return (<>
        {/* Показываем всплывающее окно только если есть выбранный элемент */}
        {selectId &&
            <div className='popup'>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="popup__main">
                    <div className="popup__img">
                        <img src={item.picture} alt="" />
                    </div>
                    <div className="popup__content">
                        <div className="popup__text">
                            <span>name:</span> {item.name}
                        </div>
                        <div className="popup__text">
                            <span>age:</span> {item.age}
                        </div>
                        <div className="popup__text">
                            <span>email:</span> {item.email}
                        </div>
                        <div className="popup__text">
                            <span>phone:</span> {item.phone}
                        </div>
                        <div className="popup__text">
                            <span>about:</span> {item.about}
                        </div>
                    </div>
                    {/* Кнопка для закрытия всплывающего окна */}
                    <div onClick={handleClose} className="popup__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect width="60" height="60" rx="20" fill="#EB5757" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.5514 30.5514L14.1028 46L13 44.8972L28.4486 29.4486L14.1028 15.1028L15.2055 14L29.5514 28.3458L43.8972 14L45 15.1028L30.6542 29.4486L46.1028 44.8972L45 46L29.5514 30.5514Z" fill="white" />
                        </svg>
                    </div>
                </motion.div>

                {/* Затемненный фон для закрытия всплывающего окна по клику вне его области */}
                <motion.div
                    onClick={handleClose}
                    className="popup__bg"></motion.div>
            </div>
        }
    </>
    )
}

export default Popup