import Heading from "./Heading"
import MayLikeItem from "./MayLikeItem"
import { useEffect, useState } from "react"
import ScrollToTop from "./ScrollToTop"

const Home = () => {
    let name = "Item"
    let infos = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]

    const [isScrollNeeded, setIsScrollNeeded] = useState(true)

    const getRandomInfo = () => {
        return infos[Math.round(Math.random() * 100) % 3]
    }

    const [mayLikeItems, setItems] = useState([
        {
            id: 0,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 1,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 2,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 3,
            name: name,
            info: getRandomInfo()
        } 
    ])
    const [id, setId] = useState(4)

    const showMoreItems = () => {
        setIsScrollNeeded(false)
        setItems([...mayLikeItems,
            {
                id: id,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 1,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 2,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 3,
                name: name,
                info: getRandomInfo()
            }
        ])
        setId(id + 4)
    }

    return (
        <div className='home'>
            <Heading />
            {isScrollNeeded ? <ScrollToTop /> : null}
            <section className='may-like-items'>
                <h1>You may be interested</h1>
                <ul>
                    { mayLikeItems.map(item => 
                        <MayLikeItem key={item.id} name={`${item.name} ${item.id + 1}`} info={item.info}/>) }
                </ul>
                <div className='view-more'>
                    <button className='may-like-items__view-more-button' onClick={showMoreItems}>View more</button>
                </div>    
            </section>
        </div>
    )
}

export default Home
