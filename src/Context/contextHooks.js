
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD TO CART':
            return state.map(items => {
                if(items.id === action.id) {
                    return {...items, inCart: true}
                }
                else {
                    return items;
                }
            });
        case 'REMOVE FROM CART':
            return state.map(items => {
                if(items.id === action.id) {
                    return {...items, inCart: false}
                }
                else {
                    return items;
                }
            });
        case 'INCREASE QUANTITY':
            return state.map(item => {
                if(item.id === action.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                else {
                    return item;
                }
            });
            case 'DECREASE QUANTITY':
                return state.map(item => {
                    if(item.id === action.id) {
                        return {...item, quantity: item.quantity <= 1? 1 : item.quantity - 1}
                    }
                    else {
                        return item;
                    }
                });
        default:
            return state;
    }   

}
export default reducer



