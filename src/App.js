import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import ItemPage from "./components/ItemPage"
import Footer from "./components/Footer"
import { useState } from "react"

const App = () => {

    const [allItems, setAllItems] = useState([
        {id: 1, name: "Boeing 547", price: 23999, weight: 5470,  count: 1},
        {id: 2, name: "Boeing 222", price: 18999, weight: 7000, count: 2},
        {id: 3, name: "Boeing 777", price: 25999, weight: 1000, count: 1},
        {id: 4, name: "Boeing 555", price: 20440, weight: 7563, count: 3}
    ])

    const [currentlyDisplayedItems, setCurrentlyDisplayedItems] = useState(allItems)

    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/catalog' render={props => <Catalog {...props}
                                                 allItems={allItems} currentlyDisplayedItems={currentlyDisplayedItems}
                                                 setAllItems={setAllItems}
                                                 setCurrentlyDisplayedItems={setCurrentlyDisplayedItems}
/>}/>
                    <Route path='/item/:id' render={props => <ItemPage {...props} allItems={allItems}/>}/>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App
