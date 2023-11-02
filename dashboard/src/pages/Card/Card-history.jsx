import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const CardHistory = () => {

    const [cardHistory, setCardHistory] = useState([])

    const getCardHistory = async () => {
        try {
            const response = await fetch(
                "http://192.168.1.163:8000/v1/shop_news/user_card_list_views/",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setCardHistory(jsonData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getCardHistory()
    },[])

    return(
        <Layout>
            <div className="w-100 p-3 bg-light rounded">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">Card History</li>
            </ol>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">N</th>
                        <th scope="col">User first_name</th>
                        <th scope="col">Number card</th>
                        <th scope="col">Summa</th>
                        <th scope="col">Exp Date</th>
                    </tr>
                </thead>
                <tbody>
                    {cardHistory.map((item,index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.user_id.first_name}</td>
                        <td>{item.number_card}</td>
                        <td>{item.summ}</td>
                        <td>{item.exp_date}</td>
                    </tr>
                    )}
                </tbody>
            </table> 
        </div>
        </Layout>
    )
}

export default CardHistory