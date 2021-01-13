
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { addToCart} from '../../Redux/actions/cartActions'
import classes from './CartScreen.module.css'
import MessageBox from '../../components/UI/Message/MessageBox'

const CartScreen = (props) => {
    const dispatch = useDispatch()
    const search = useLocation().search
    const qty= new URLSearchParams(search).get('qty')
    const size = new URLSearchParams(search).get('size')
    
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

    }

    const checkoutHandler = () => {
        
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
                               ({cartSumQty})PROIZVODA
                            </div>
                        </div>
                        { cartItem.length === 0 ? (
                        <MessageBox>Nema proizvoda u korpi 
                            <Link to='/'>Idi u Shopping</Link>
                        </MessageBox>) : (
                            <ul>
                                {
                                    cartItem.map(item => (
                                        <li key={item.product}>
                                            <div className={classes.ProductList}>
                                                <div>
                                                    <img 
                                                        className={classes.imgSmall}
                                                        src={item.image} alt={item.name}/>
                                                </div>
                                                <div className={classes.min25}>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                   Velicina: {item.size}
                                                    {/* <select
                                                        value={item.size}
                                                        onChange={ (e) => dispatch(
                                                            addToCart(item.product, undefined, e.target.value)
                                                            )}
                                                    >
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="XXL">XXL</option> 
                                                    </select> */}
                                                </div> 
                                                <div>
                                                    <select
                                                        value={item.qty}
                                                        onChange={e => dispatch(
                                                            addToCart(item.product, Number(e.target.value))
                                                        )}
                                                    >
                                                          {Array.from(Array(item.countInStock).keys()).map(x => (
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))}
                                                    </select>
                                                    
                                                </div>
                                                <div className={classes.Price}>
                                                    {item.price} rsd
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
                            </ul>
                        )}
                        
                    </div>
                    
                    <div className={classes.Column2}>
                        <div>
                            <div>
                                <h2>Ukupno za placanje  : 
                                {cartSumPrice} rsd</h2>
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
