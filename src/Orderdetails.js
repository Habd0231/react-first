import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const OrderDetails = () => {
    const { id }= useParams();
    const { data: orders, loading, error } = useFetch('http://localhost:8000/orders/' + id);
    const history = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/orders/' + orders.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="order-details">
           {error && <div>{ error }</div> }
           {loading && <div>loading......</div> }
           {orders && (
            <ul>
                <li><h3>Client name: { orders.client } </h3></li>
                <li>shopped from: { orders.market } </li>
                <li>ordered: { orders.name } </li>
            </ul>
           )}
           <button onClick={handleClick}>Cancel the Order</button>

        </div>
     );
}
 
export default OrderDetails;