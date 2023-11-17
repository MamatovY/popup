import { useDispatch, useSelector } from 'react-redux'
import './popup.scss'
import { changeSelect } from 'store/personalSlice'
import { motion } from 'framer-motion'

const Popup = () => {
    const { selectId, personal } = useSelector(state => state.personal)
    const item = personal.find(item => item.id === selectId);

    console.log(selectId);
    console.log(item);
    const dispatch = useDispatch()
    const handleClose = () => dispatch(changeSelect(''))
    return (<>
        {
            selectId &&
            <div className='popup'>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="popup__main">
                    <div className="popup__img">
                        <img src="https://layout.solvintech.ru/nuxt/api/images/original-2.jpg" alt="" />
                    </div>
                    <div className="popup__content">
                        <div className="popup__text">
                            <span>name:</span> {item.name}
                        </div>
                        <div className="popup__text">
                            <span>age:</span> {item.name}
                        </div>
                        <div className="popup__text">
                            <span>email:</span> {item.email}
                        </div>
                        <div className="popup__text">
                            <span>phone:</span> {item.phone}
                        </div>
                        <div className="popup__text">
                            <span>about:</span> Duis do deserunt qui qui pariatur cupidatat voluptate. Consectetur dolore Lorem culpa exercitation fugiat irure cupidatat voluptate tempor proident ad aliquip. Quis nisi officia tempor amet eiusmod laborum non nostrud esse culpa dolore culpa reprehenderit. Ullamco magna reprehenderit veniam enim nostrud et velit nulla labore officia velit cillum. Et qui ullamco minim officia cillum culpa in voluptate.\r\n
                        </div>
                    </div>
                    <div onClick={handleClose} className="popup__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <rect width="60" height="60" rx="20" fill="#EB5757" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5514 30.5514L14.1028 46L13 44.8972L28.4486 29.4486L14.1028 15.1028L15.2055 14L29.5514 28.3458L43.8972 14L45 15.1028L30.6542 29.4486L46.1028 44.8972L45 46L29.5514 30.5514Z" fill="white" />
                        </svg>
                    </div>
                </motion.div>
                <motion.div
                    onClick={handleClose}
                    className="popup__bg"></motion.div>
            </div>
        }
    </>
    )
}

export default Popup