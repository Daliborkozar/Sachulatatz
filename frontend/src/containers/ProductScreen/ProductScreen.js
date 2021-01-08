import React from 'react'
import Rating from '../../components/Rating/Rating'
import data from '../../data/data'

const ProductScreen = (props) => {
    const product = data.products.find(x => x._id === props.match.params.id)
    if(!product){
        return <div>Proizvod nije pronadjen</div>
    }
    return (
        <div className="product-container">
            <div className="col-2">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    </li>
                    <li>Cena: {product.price} rsd</li>
                    <li>Opis: <p>{product.descpription}</p></li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Cena:</div>
                                <div className="price">{product.price} rsd</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Stanje:</div>
                                <div>
                                    {product.countInStock>0 ? <span className="success">Na Stanju</span> : 
                                    <span className="fail">Nema na stanju</span>}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

