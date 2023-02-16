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

type TitleProps = {
    name: string
    text: string
    year: number
}

const Title = ({ name, text, year }: TitleProps) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year {year}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title name="App" text="Lorem fdgfd" year={10} />
            <Title name="React" text="Lorem fdgfd" year={10} />
            <Title name="TS" text="Lorem fdgfd" year={10} />
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
