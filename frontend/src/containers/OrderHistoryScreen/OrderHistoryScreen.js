import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'

const OrderHistoryScreen = () => {
    const orderHist = useSelector(state => state.orderHistory)
    const {loading, error, orders} = orderHist

    return (
        <div>
            <h1>Order History</h1>
            {loading ? <Loader></Loader> :
            error ? <MessageBox>{error}</MessageBox>
            :
            (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATUM</th>
                            <th>UKUPNO</th>
                            <th>PLACENO</th>
                            <th>DOSTAVLJENO</th>
                            <th>INFO</th>
                        </tr>
                        <tbody>
                            <tr>
                                {/* map over order */}
                            </tr>
                        </tbody>
                    </thead>
                </table>
            )
            }
        </div>
    )
}
//https://www.tutorialrepublic.com/codelab.php?topic=html&file=table-with-a-header-footer-and-body
export default OrderHistoryScreen
