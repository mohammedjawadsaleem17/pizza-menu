import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
]

// --------------------------------------------------------------------------------------------------------------------------------
function App() {
    //If its in between open hour then should be displayed

    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Pizza({ pizzaObjs }) {
    console.log(pizzaObjs)
    // if (pizzaObjs.soldOut) return null

    return (
        <li className={`pizza ${pizzaObjs.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObjs.photoName} alt={pizzaObjs.name} />
            <div>
                <h3>{pizzaObjs.name}</h3>
                <p>{pizzaObjs.ingredients}</p>
                <span>{pizzaObjs.soldOut ? 'SOLD OUT' : pizzaObjs.price}</span>
            </div>
        </li>
    )
}
function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length
    return (
        <div className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creatice dishes to choose
                        from, All from our stone oven, all organic, all
                        delicious!
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObjs={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later ;)
                </p>
            )}
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours()
    console.log(hour)
    const openHour = 10
    const closeHour = 22

    const isOpen = hour >= openHour && hour <= closeHour

    if (false) {
        return (
            <p>
                I am Contidional Rendered We're open until {closeHour}:00. Come
                visit us or order online{' '}
            </p>
        )
    }

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                'Hey Happy to serve you tomorrow, do visit us, but we have called it a day!!!'
            )}
        </footer>
    )
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We're open until {props.closeHour}:00. Come visit us or order
                online{' '}
            </p>
            <button className="btn scale-up-center">Order Now</button>
        </div>
    )
}

function Header() {
    // const style = {
    //     color: 'red',
    //     fontSize: '21px ',
    //     textTransform: 'uppercase',
    // }

    return (
        <header className="header">
            <h1>Zy Pizza co.</h1>
        </header>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
