import './cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changeOffset, fetchPersonal } from 'store/personalSlice'
import CardItem from 'components/cardItem'
import { AnimatePresence } from 'framer-motion'

const Cards = () => {
    const { personal, status, offset } = useSelector(state => state.personal)
    const [finish, setFinish] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPersonal())
    }, [])

    const handleMore = e => {
        e.preventDefault()
        dispatch(changeOffset(offset + 4))
        if (offset + 4 >= personal.length) {
            setFinish(true)
        }
    }

    return (
        <div className='cards container'>
            {status === 'loading' ?
                <h2 className='cards__loading'>Loading...</h2>
                :
                <>
                    <div className="cards__items">
                        <AnimatePresence mode='wait'>
                            {
                                personal.map((item, i) => {
                                    if (i >= offset) return null
                                    return (
                                        <CardItem key={item.id} {...item} />
                                    )
                                })
                            }
                        </AnimatePresence>
                    </div>
                    {
                        finish || <a onClick={handleMore} className='cards__more' href="#">Load more...</a>
                    }
                </>
            }

        </div>
    )
}

export default Cards