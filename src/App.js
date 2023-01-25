import './App.css';
import Header from './Header';
import Home from './Home';
// import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import SearchResult from './SearchResult';
import ContactForm from './ContactForm';
// install
/*
Something of google data base
Material ui
React Router

*/

const promise = loadStripe("pk_test_51MFElXDBT3r37HufrrQWkWSstyDHSyR5zzKwP4hdidBzJbzUJygfD1gVk48MaIXRjtXZogbe2aeEaD6Gr18xXjuD00KwjaovqH");

function App() {

  const [{}, dispatch] = useStateValue();

  //Search Process

  const [searchTerm, setSearchTerm] = useState('');
  //this sets initial value  
  const data = [

    {
      id:12321341,
      title:"BH20 OEM Earphone Headphone Factory Active Noise Cancelling ANC Wireless Bluetooth Headphones With Microphone Noise Canceling",
      price:299.99,
      rating:5,
      image:"./img/product02.png"
    },

{
      id:1267677,
      title:"ASUS ROG Strix, Intel Core i9, 32GB RAM, 2TB SSD, NVIDIA GeForce RTX 3080 Ti, 17.3 Inch Gaming Laptop G733CX-LL017W",
      price:3119.98,
      rating:5,
      image:"./img/product01.png"
    },

{
      id:1230900,
      title:"MSI Raider GE76, Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 3080, 17.3 Inch Gaming Laptop, 9S7-17K424-419",
      price:733.99,
      rating:5,
      image:"./img/product03.png"
    },

{
    id:1897081,
    title:"Apple iPad 9th Gen, 10.2 Inch, WiFi, 256GB",
    price:533.99,
    rating:5,
    image:"./img/product04.png"
  },
  {
    id:12321341,
    title:"Beats Solo3 Wireless Headphones",
    price:129.99,
    rating:5,
    image:"./img/product05.png"
  },

  {
    id:49538094,
    title:"Ready stock 14.1 Inch Laptop China Low Price Windows 10 Netbook 4GB Laptop Spanish keyboard Stock Ultra Thin Laptops 14",
    price:239.0,
    rating:4,
    image:"./img/product06.png"
  },

  {

    id:23445930,
    title:"OEM Hot Selling Original I14 Pro Max 8GB+256GB unlocked 6.7-inch full screen Mobile 5G Video Smart Phone",
    price:98.99,
    rating:5,
    image:"./img/product07.png"

  },
  {

    id:7254354345,
    title:"2022 Newest Arrival 15.6 inch laptop Factory hot sell gaming Laptop High Quality Notebooks for Business laptop manufacturer",
    price:598.99,
    rating:4,
    image:"./img/product08.png"
  },
  {

    id:90829332,
    title:"Best Hight Quality Good Price Can-ons E O S-1D X Mark III DSLRs Camera with EF 70-200mm F/2.8L IS III USM Lens",
    price:1094.98,
    rating:4,
    image:"./img/product09.png"
  },

  {

    id:90829332,
    title:"Best Hight Quality Good Price Can-ons E O S-1D X Mark III DSLRs Camera with EF 70-200mm F/2.8L IS III USM Lens",
    price:1094.98,
    rating:4,
    image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
  }
];

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        //the user is logged out
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
            <Route path="/login" element={<Login/>}/>             
            <Route path="/orders" element={<><Header/><Orders/></>}/>
            <Route path="/checkout" element={<><Header/><Checkout/></>}/>
            <Route path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
            <Route path="/" element={<>
            <Header
              handleChange={(event) =>{ 
                const searchTerm = event.target.value;
                const searchTerms = searchTerm.split(" ");
                setSearchTerm(searchTerm);
                // if (!searchTerm) {
                //   setFilteredData([]);
                // }
              }}
              
              //handle submit
              
              handleSubmit={(event) => {
                event.preventDefault();
                // Filter the data based on the search term
                let filtered = data;
                const searchTerms = searchTerm.split(" ");
                searchTerms.forEach((term) => {
                  filtered = filtered.filter((item) =>
                    item.title.toLowerCase().includes(term.toLowerCase())
                  );
                })
                setFilteredData(filtered);
              }}
              searchTerm={searchTerm}
            />
            <SearchResult filteredData={filteredData}/><ContactForm/>
            </>}/>
 
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
//  4:39:00 