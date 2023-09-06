import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
function Data() {
  const [coin, setCoins] = useState([]);
  const [search, setSearch]=useState('');


  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
    }).catch(error=>console.log(error));
  }, [])

 // to ge the data from the input value
  const handleChange =e =>{
    setSearch(e.target.value);
  } 


  // to get only lowercase result
  const filteredCoins = coin.filter(coin=>{
    return (coin.name.toLowerCase().includes(search.toLowerCase()));
  })

  return (
    <>
    <div className='coin-app container-fluid'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type = "text"className='coin-input' placeholder='Search'onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin=>{
        return(
          <>
          <Coin key={coin.id} name={coin.name} image={coin.image}  symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_24h} />
      
          </>
        )
      })}
    </div>
    </>
  );
}

export default Data;
