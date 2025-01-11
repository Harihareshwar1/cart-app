
function Home(props){
    return <>
        <div className="flex gap-4">
            <div className="product">
                <h1>I phone 16 pro max</h1>
                <h2>Rs. 1,20,000.00</h2>
                <button onClick={() => props.update("I phone 16 pro max")}>Add to Cart</button>
            </div>
            <div className="product">
                <h1>One Plus 11R</h1>
                <h2>Rs. 40,000.00</h2>
                <button onClick={() => props.update("One Plus 11R")}>Add to Cart</button>
            </div>
            <div className="product">
                <h1>PS5 Pro</h1>
                <h2>Rs. 54,000.00</h2>
                <button onClick={() => props.update("PS5")}>Add to Cart</button>
            </div>

        </div>
    </>
}


export default Home;