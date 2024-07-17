const initailData ={
    cart: 0
}

const Cartreducer=(state=initailData,action)=>{
    switch (action.type) {
        case 'Addtocart':
            return{
                cart:++state.cart
            }
            break;
            case 'Removefromcart':
                return{
                    cart:--state.cart
                    }
        default:
            return state
        }





}

export default Cartreducer