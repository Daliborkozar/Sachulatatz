import React,{useState, useEffect} from 'react'
import Product from '../../components/Product/Product'
import axios from 'axios'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'
//import data from '../../data/data'

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
       const fetchData = async () => {
           try{
            setLoader(true)
            const {data} = await axios.get('/api/products')
            setLoader(false)
            setProducts(data)
           }catch(err) {
               setError(err.message)
               setLoader(false)
           } 
       }
       fetchData()
    }, [])

    let productList = null

    if(loader){
        productList = <Loader />
    }else if(error){
        productList = <MessageBox>{error}</MessageBox>
    }
        

    return (
        <div>
            {productList}
            <div className="row center" >
                {products.map((product) => (
                <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default HomeScreen
