import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";


const News = () => {
    const [modal, setModal] = useState(false)
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState(null);
    const [editingNewsId, setEditingNewsId] = useState(null);
    const [selectedNews, setSelectedNews] = useState(null);
    const BASE_URL = 'http://192.168.1.163:8000'

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/v1/shop_news/news_list_views/`,
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

    const postData = async () => {
        const url = `${BASE_URL}/v1/shop_news/news_list_views/`;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("img", img);

        const requestOptions = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        };

        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
            setContent(responseData);
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }

        getNews();
        clearInputs();
        setModal(false);
    };

    const deleteNews = async (id) => {
        const url = `${BASE_URL}/v1/shop_news/news_crud_views/${id}/`;
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            },
        };
        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
        } catch (error) {
            console.error(error);
        }
        getNews()
        clearInputs()
    }

    const editNews = (id) => {
        const foundNews = news.find((item) => item.id === id);
        if (foundNews) {
            setEditingNewsId(id);
            setModal(true);
            setTitle(foundNews.title);
            setContent(foundNews.content);
        }
    };

    const updateNews = async () => {
        const url = `${BASE_URL}/v1/shop_news/news_crud_views/${editingNewsId}/`;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        console.log(img);
        if (img) {
            formData.append("img", img);
        }
        const requestOptions = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        };

        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
        } catch (error) {
            console.error(error);
        }
        getNews();
        setEditingNewsId(null);
        setModal(false);
        clearInputs();
    };

    const clearInputs = () => {
        setTitle("");
        setContent("");
        setImg(null);
    };

    const openModal = (id) => {
        const foundNews = news.find((item) => item.id === id);
        setSelectedNews(foundNews);
        setModal(true);
    };

    return <Layout>
        <div className="w-100">
            <div className="p-4 w-100 bg-light me-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Blogs</h1>
                    <button onClick={() => setModal(!modal)}
                        className="btn btn-outline-dark">
                        +Add
                    </button>
                </div>
                <table className="table">
                    <thead className="bg-dark">
                        <tr>
                            <th>N</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {news.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>
                                    {item.content.split(' ').slice(0, 3).join(' ')}
                                    {item.content.split(' ').length > 3 && '...'}
                                </td>
                                <td>
                                    {item.img && <img width={75} src={`${BASE_URL}${item.img}`} alt="error-img" />}
                                </td>
                                <td>
                                    <button onClick={() => editNews(item.id)} className="btn btn-warning mx-1">Edit</button>
                                    <button onClick={() => deleteNews(item.id)} className="btn btn-danger mx-1">Delete</button>
                                    <Link to={`/current-news/${item.id}`}>
                                        <button onClick={() => openModal(item.id)} className="btn btn-dark mx-1">View</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`${modal ? "d-flex modal-box justify-content-center align-items-center w-100" : "d-none"}`}>
                <div className="card w-50">
                    <div className="card-header d-flex justify-content-between align-items-center bg-dark text-light">
                        <h3>{editingNewsId ? "Edit News" : "Add News"}</h3>
                        <button onClick={() => { setModal(!modal); setEditingNewsId(null); clearInputs() }} className="btn-close text-danger bg-danger"></button>
                    </div>
                    <div className="card-body">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control mb-2"
                            placeholder="title"
                            type="text"
                        />
                        <input
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="form-control mb-2"
                            placeholder="content"
                            type="text"
                        />

                        <input
                            key={img}
                            onChange={(e) => setImg(e.target.files[0])}
                            className="form-control mb-2"
                            placeholder="img"
                            type="file"
                        />

                        {editingNewsId ? (
                            <button onClick={updateNews} className="btn btn-dark">
                                Update
                            </button>
                        ) : (
                            <button onClick={postData} className="btn btn-dark">
                                Add
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </div>
    </Layout >

};

export default News;
