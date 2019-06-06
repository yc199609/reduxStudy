import store from './store'
import { addToCart } from './actions/cart-actions'
console.log('initial state: ',store.getState())

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addToCart('Coffee 500gm',1,260))

unsubscribe()