function TotalToPaySection(props){
    
    const totalToPay = () =>{
        const itemsInCart = props.getItemsInCart()
        let totalToPay = 0
        for(const item of itemsInCart){
          totalToPay += item.price * item.amountInCart
        }
        return totalToPay.toFixed(2)
    }

    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">{`£ ${totalToPay()}`}</span>
            </div>
        </div>
    )
}
export default TotalToPaySection