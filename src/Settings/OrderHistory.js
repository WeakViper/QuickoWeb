import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SettingsNavbar from "./SettingsNavbar";
import Footer from "../Footer/footerHome";
import { BackButton } from "./MainPage";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./OrderHistory.css";

const OrderHistory = () => {
    const [selectedRange, setSelectedRange] = useState("all");
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredOrders, setFilteredOrders] = useState([]);


    // Sample data for demonstration
    //Replace with API Connection
    const orderData = [
        {
            date: "2023-08-27",
            total: "$50.00",
            items: 6,
            status: "Delivered",
            products: [
                { name: "Product A", price: "$20.00" },
                { name: "Product B", price: "$15.00" },
                { name: "Product C", price: "$15.00" },
                { name: "Product D", price: "$20.00" },
                { name: "Product E", price: "$15.00" },
                { name: "Product F", price: "$15.00" },
                { name: "Product G", price: "$15.00" },
            ],
        },

        {
            date: "2023-08-28",
            total: "$50.00",
            items: 6,
            status: "In Transit",
            products: [
                { name: "Product A", price: "$20.00" },
                { name: "Product B", price: "$15.00" },
                { name: "Product C", price: "$15.00" },
                { name: "Product D", price: "$20.00" },
                { name: "Product E", price: "$15.00" },
                { name: "Product F", price: "$15.00" },
                { name: "Product G", price: "$15.00" },
            ],
        },
        {
            date: "2023-08-30",
            total: "$50.00",
            items: 6,
            status: "Cancelled",
            products: [
                { name: "Product A", price: "$20.00" },
                { name: "Product B", price: "$15.00" },
                { name: "Product C", price: "$15.00" },
                { name: "Product D", price: "$20.00" },
                { name: "Product E", price: "$15.00" },
                { name: "Product F", price: "$15.00" },
                { name: "Product G", price: "$15.00" },
            ],
        },
        {
            date: "2024-07-25",
            total: "$50.00",
            items: 6,
            status: "Delivered",
            products: [
                { name: "Product A", price: "$20.00" },
                { name: "Product B", price: "$15.00" },
                { name: "Product C", price: "$15.00" },
                { name: "Product D", price: "$20.00" },
                { name: "Product E", price: "$15.00" },
                { name: "Product F", price: "$15.00" },
                { name: "Product G", price: "$15.00" },
            ],
        },
    ];


    useEffect(() => {
        // Filter orders based on selected range and date
        const selectedDateString = selectedDate ? selectedDate.toISOString().substring(0, 10) : null;
        let filtered = orderData;

        if (selectedRange === "month") {
            filtered = orderData.filter(order => {
                const orderMonth = new Date(order.date).getMonth();
                const orderYear = new Date(order.date).getFullYear();

                return orderMonth === new Date().getMonth() && orderYear === new Date().getFullYear();
            });
        } else if (selectedRange === "week") {
            const today = new Date();
            const lastWeek = new Date(today);
            lastWeek.setDate(today.getDate() - 7); 
    
            filtered = orderData.filter(order => {
                const orderDate = new Date(order.date);
                return orderDate >= lastWeek && orderDate <= today;
            });

        } else if (selectedRange === "date" && selectedDateString) {
            filtered = orderData.filter(order => order.date === selectedDateString);
        } else if (selectedRange === "delivered") {
            filtered = orderData.filter(order => order.status === "Delivered");
        } else if (selectedRange === "cancelled") {
            filtered = orderData.filter(order => order.status === "Cancelled");
        } else if (selectedRange === "in-transit") {
            filtered = orderData.filter(order => order.status === "In Transit");
        }

        setFilteredOrders(filtered);
    }, [selectedRange, selectedDate]);


    return (
        <div>
            <SettingsNavbar />
            <Container>
                <BackButton />
                <Row className="mt-4">
                    <Col>
                        <h2 className="orderhistory-heading">Order History</h2>
                    </Col>
                </Row>
                <div className="filter-container">
                <div className="filter-icon">&#9776;</div>
                <div className="select-container">
                    <span>Filter by:&nbsp;&nbsp;</span>
                    <select value={selectedRange} onChange={event => setSelectedRange(event.target.value)}>
                        <option value="all">All</option>
                        <option value="month">Last 30 Days</option>
                        <option value="week">Last Week</option>
                        <option value="date">Choose by Date</option>
                        <option value="delivered">Delivered</option>
                        <option value="in-transit">In Transit</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    {selectedRange === "date" && (
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            className="form-control"
                        />
                    )}
                </div>
            </div>
                {filteredOrders.map((order, index) => (
                    <div key={index} className="order-history-item">
                        <h3>{new Date(order.date).toDateString()}</h3>
                        <p>{`Total: ${order.total} - Items: ${order.items}`}</p>
                        <p>{`Status: ${order.status}`}</p>
                        <div className="oh-product-list">
                            {order.products.map((product, productIndex) => (
                                <Card key={productIndex} className="oh-product-card">
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
            <Footer />
        </div>
    );
};

export default OrderHistory;
