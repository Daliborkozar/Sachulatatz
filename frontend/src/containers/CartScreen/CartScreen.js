
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { addToCart, removeFromCart} from '../../Redux/actions/cartActions'
import classes from './CartScreen.module.css'
import MessageBox from '../../components/UI/Message/MessageBox'

const CartScreen = (props) => {
    const dispatch = useDispatch()
    const search = useLocation().search
    const history = useHistory()
    console.log(search)
    const qtyString= new URLSearchParams(search).get('qty')
    const size = new URLSearchParams(search).get('size')
    const qty = qtyString * 1
    
    const productId = props.match.params.id
    const cart = useSelector(state => state.cart)
    const {cartItem} = cart

    // const qty = props.location.search.split('=')[1]

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty,size))
        }
    },[dispatch,productId, qty,size])

    let cartSumQty = cartItem.reduce((prev, current) => {
        return prev + current.qty * 1}, 0);
    let cartSumPrice = cartItem.reduce((acc, value) => acc + value.price * value.qty, 0)
    console.log(cartSumQty)

    console.log(cartSumQty)

    const removeFromCartHandler= (id) => {
        //delete from cart
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/signin?redirect=shipping')
    }


    return (
        <div>
            <div className={classes.pageWrapper}>
                <div className={classes.Row}>
                    <div className={classes.Column1}>
                        <div className={classes.HeaderTitle}>
                            <div>
                               MOJA KORPA:
                            </div>
                            <div>
                               ({cartSumQty})PROIZVODA U KORPI
                            </div>
                        </div>
                        { cartItem.length === 0 ? (
                        <MessageBox>Nema proizvoda u korpi {localStorage.clear()}
                            <Link to='/'> Idi u Shopping</Link>
                        </MessageBox>) : (
                            <ul>
                                {
                                    cartItem.map(item => (
                                        <li key={item.product}>
                                            <div className={classes.ProductList}>
                                                <div className= {classes.min10}>
                                                    <img 
                                                        className={classes.imgSmall}
                                                        src={item.image} alt={item.name}/>
                                                </div>
                                                <div className={classes.min25}>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                   Vel: {item.size}
                                                </div> 
                                                <div>
                                                    <select
                                                        value={item.qty}
                                                        onChange={e => dispatch(
                                                            addToCart(item.product, Number(e.target.value),item.size)
                                                        )}
                                                    >
                                                          {Array.from(Array(item.countInStock).keys()).map(x => (
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))}
                                                    </select>
                                                    
                                                </div>
                                                <div className={classes.Price}>
                                                    {item.price}.00 rsd
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                    >Obrisi</button>
                                                </div>
                                             </div>
                                        </li>
                                    ))
                                }
                                <div className={classes.backLink}>
                                    <Link to='/'>Dodaj jos proizvoda</Link>
                                </div>
                            </ul>
                        )}
                        
                        
                    </div>
                    
                    <div className={classes.Column2}>
                        <div>
                            <div>
                                <hr></hr>
                                <h2>Ukupno za placanje:<br/>  
                                {cartSumPrice}.00 rsd</h2>
                                <hr></hr>
                            </div>
                            <div>
                                <button
                                type="button"
                                onClick={checkoutHandler} 
                                className={classes.btn}
                                disable={cartItem.length === 0}
                                >Poruci</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartScreen
