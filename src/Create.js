import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [client,setClient] = useState('')
    const [name,setName] = useState('juice')
    const [market,setMarket] = useState('bahdja-shop')
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the refresh after submitting
        const Order = { client, name, market }

        setLoading(true)
        fetch('http://localhost:8000/orders',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Order)
        }).then(() => {
            console.log('new order set from '+ client)
            setLoading(false)
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add New Order</h2>
            <form onSubmit={handleSubmit} >
            <label>Your Name : </label>
            <input type="text" 
            required
            value={client}
            onChange = {(e) => setClient(e.target.value)}
            />

                <label>What do you wanna buy? : </label>
                <select
                value={name}
                onChange = {(e) => setName(e.target.value)}
                >
                    <option value="juice">juice</option>
                    <option value="fruit">fruit</option>
                </select>
                <label>Which market : </label>
                <select
                value={market}
                onChange = {(e) => setMarket(e.target.value)}
                >
                    <option value="bahdja-shop">bahdja-shop</option>
                    <option value="city-shop">city-shop</option>
                </select>
                {!loading && <button>Set Order</button>}
                {loading && <button disabled>Setting Order</button>}
            </form>
        </div>
     );
}
 
export default Create; 