import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";

const CurrentNews = () => {
    const [news, setNews] = useState([]);
    const BASE_URL = 'http://192.168.1.163:8000'
    const { id } = useParams();

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/v1/shop_news/news_crud_views/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setNews(jsonData)
        } catch (error) {
            console.error(error);
        }
    }

    return <Layout>
        <div className="w-100">
            <div className="p-4 w-100 bg-light me-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Current News</h1>
                </div>
                <table className="table">
                    <thead className="bg-dark">
                        <tr>
                            <th>N</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {news.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>
                                    {item.img && <img width={75} src={`${BASE_URL}${item.img}`} alt="error-img" />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </Layout>;
};

export default CurrentNews;
