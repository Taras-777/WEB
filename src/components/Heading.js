import React from 'react'
import home_img from "./assets/home_img.jpg"

const Heading = () => {
    return (
        <section className='heading'>
            <img className='heading__image' src={home_img} alt='items'/>
            <div className='heading__info'>
                <h2>Welcome!!!</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>    
        </section>
    )
}

export default Heading
