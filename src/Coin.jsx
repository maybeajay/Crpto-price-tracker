import React, { useState } from "react";
import  './CoinStyles.css';
import { Button } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
const Coin = ({name, image, symbol, price, volume, priceChange})=>{
    const [coindata, setCoinData]=useState("")
    return(
        <div className="coin-container">
            <div className="coin-row">
                <img src={image} alt="Crypto" className="img-cryp"/>
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
                <div className="coin-data">
                    <p className="coin-price">Current Price ₹ {price.toLocaleString()}</p>
                    <p className="coin-volume">Volume ₹ {volume.toLocaleString()}</p>
                    {
                        priceChange <0 ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) :(
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )
                }
                <Button variant="outline-light" onClick={()=>setCoinData({name, image, symbol})}>Add <FaPlus /></Button>
                </div>
            </div>
        </div>
    )
}
export default Coin;