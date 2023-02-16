import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')

const title = <h1 id="title">Hello React</h1>

const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum
            odit quas, nulla voluptatum accusantium itaque veniam accusamus
            natus suscipit velit! Quidem illum accusantium iusto ipsam obcaecati
            cum, vitae mollitia!
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
