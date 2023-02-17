type Props = {}
const List = (props: Props) => {
    let data = false
    const styleObj = {
        color: 'white',
        backgroundColor: data ? 'purple' : 'tomato',
        padding: '15px',
    }
    return (
        <>
            <ul>
                <li>List1</li>
                <li>List2</li>
                <li>List3</li>
            </ul>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'purple' : 'tomato',
                    padding: '15px',
                }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                aperiam reprehenderit maiores at sed perspiciatis architecto
                aliquam! Ea fugiat placeat natus nobis. Dicta eum labore
                deleniti ipsum architecto porro dolor!
            </p>
            <p style={styleObj}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                adipisci provident totam veniam assumenda dolorum quidem
                voluptatum dignissimos inventore quibusdam amet cum, blanditiis
                necessitatibus iusto ad a! Debitis, itaque illum.
            </p>
        </>
    )
}
export default List
