import React from 'react'
import ReactDOM from 'react-dom/client'

function List() {
    return (
        <React.Fragment>
            <ul>
                <li>List1</li>
                <li>List2</li>
                <li>List3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                aperiam reprehenderit maiores at sed perspiciatis architecto
                aliquam! Ea fugiat placeat natus nobis. Dicta eum labore
                deleniti ipsum architecto porro dolor!
            </p>
        </React.Fragment>
    )
}

function Title() {
    return <h1>Hello TS</h1>
}

const App = () => {
    return (
        <div className="app">
            <Title />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
