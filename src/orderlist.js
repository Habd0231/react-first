import { Link } from "react-router-dom";

const Orderlist = ({ orders, name }) => {
   
    return ( 
        <div className="order-list">
            <h2> { name } </h2>
             {orders.map((order) => (
                
                <div className="order-preview" key={order.id}>
                    <Link to={`orders/${order.id}`}>
                    <h2>In the {order.market}</h2>
                    <p>Mr {order.client} order {order.name}</p>
                    </Link>
                </div>
            )

            )

             }
        </div>
     );
}
 
export default Orderlist;