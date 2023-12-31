import './cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changeOffset, fetchPersonal } from 'store/personalSlice'
import CardItem from 'components/cardItem'
import { AnimatePresence } from 'framer-motion'

const Cards = () => {
    const { personal, status, offset } = useSelector(state => state.personal)

    // Локальное состояние для отслеживания завершения загрузки данных
    const [finish, setFinish] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPersonal())
    }, [])

    // Обработчик события для кнопки "Load more..."
    const handleMore = e => {
        e.preventDefault()
        // Отправка экшена для изменения смещения (offset) и загрузки дополнительных данных
        dispatch(changeOffset(offset + 4))

        // Установка состояния finish в true, если достигнут конец списка
        if (offset + 4 >= personal.length) {
            setFinish(true)
        }
    }

    return (
        <div className='cards container'>
            {/* Показываем индикатор загрузки, если данные загружаются */}
            {status === 'loading' ?
                <div className='cards__loading'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="25" fill="none" stroke="#fff" strokeWidth="4">
                            <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502" />
                            <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4; 1 250; 150.6 100.4" />
                        </circle>
                    </svg>
                </div>
                :
                // Если данных нет, выводим сообщение что не данных
                personal.length < 1 ? <h2 className='cards__loading'>There's no data.</h2>
                    :
                    // Выводим список карточек и кнопку "Load more..."
                    <>
                        <div className="cards__items">
                            <AnimatePresence mode='wait'>
                                {
                                    personal.map((item, i) => {
                                        if (i >= offset) return null
                                        return (
                                            <CardItem key={item._id} {...item} />
                                        )
                                    })
                                }
                            </AnimatePresence>
                        </div>
                        {/* Выводим кнопку "Load more..." если список не завершен */}
                        {finish || <a onClick={handleMore} className='cards__more' href="#">Load more...</a>}
                    </>

            }

        </div>
    )
}

export default Cards