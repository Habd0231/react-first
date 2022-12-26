import Orderlist from "./orderlist";
import useFetch from "./useFetch";

const Home = () => {
    const { data: orders, loading, error } = useFetch('http://localhost:8000/orders')
    return (
        <div className="home">
            {error && <div>{ error }</div> }
           {loading && <div>loading......</div> }
           {orders && <Orderlist orders = {orders} name = "All orders" />}
        </div>
    );
}
 
export default Home;