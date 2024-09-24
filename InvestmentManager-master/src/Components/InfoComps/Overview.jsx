import React from "react";
import "./Overview.css"; // Import the CSS file

const Overview = () => {
    const cards = [
        {
            title: "Invested",
            value: "₹28,891.138",
            change: "15% compared with last month",
            color: "text-purple-500",
            changeColor: "text-purple-300",
            icon: "💼",
        },
        {
            title: "Current",
            value: "₹30,831.448",
            change: "10% compared with last month",
            color: "text-green-500",
            changeColor: "text-green-300",
            icon: "📊",
        },
        {
            title: "Total PnL",
            value: "₹+2000.31",
            change: "2% compared with last month",
            color: "text-green-500",
            changeColor: "text-green-300",
            icon: "📈",
        },
        {
            title: "Day's PnL",
            value: "₹-421.0",
            change: "8% compared with last month",
            color: "text-red-500",
            changeColor: "text-red-300",
            icon: "📉",
        },
    ];

    return (
        <div className="overview-container">
            <h2 className="overview-title">Overview</h2>
            <div className="overview-grid">
                {cards.map((card, index) => (
                    <div key={index} className="overview-card">
                        <div className="card-header">
                            <div className="card-header-left">
                                <span className="card-icon">{card.icon}</span>
                                <h3 className="card-title">{card.title}</h3>
                            </div>
                            <span className={`card-value ${card.color}`}>
                                {card.value}
                            </span>
                        </div>
                        <div className={`card-change ${card.changeColor}`}>
                            {card.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
