const TotalPrice = () => {
    const buttonStyle = {
        backgroundColor: 'red', // Custom red color
        border: '20px solid #ff0000', // Slightly rounded borders
        borderRadius: '14px', // Adjust the border radius as needed
        fontSize: '18px', // Larger font size
        color: 'white', // Text color
        textAlign: 'center', // Center text horizontally
    };

    return (
        <div className="p-3 mx-3">
            <div className="card-body">
                <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">USD 568</dd>
                </dl>
                <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">USD 658</dd>
                </dl>
                <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right h5"><strong>$1,650</strong></dd>
                </dl>
                <hr />
                <p className="text-center mb-3">
                    <button className="btn px-5" style={buttonStyle}>Place Order</button>
                </p>
            </div>
        </div>
    );
}

export default TotalPrice;

