import React,{useEffect} from 'react'
import Product from '../../components/Product/Product'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList} from '../../Redux/actions/productsAction'
import CheckoutSteps from '../../components/CheckutSteps/CheckoutSteps'
//import data from '../../data/data'

const HomeScreen = () => {
    const productListed = useSelector(state => state.productList)
    
    const {loading, error, products} = productListed
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchProductList())
    }, [dispatch])

    let listOfProducts = null

    if(loading){
        listOfProducts = <Loader />
    }else if(error){
        listOfProducts = <MessageBox>{error}</MessageBox>
    }else {
        listOfProducts= (
            <div className="row center" >
            {products.map((product) => (
            <Product key={product._id} product={product} />
            ))}
        </div>
        )
    }
        

    return (
        <div>
            <CheckoutSteps/>
            {listOfProducts}
        </div>
    )
}

export default HomeScreen
