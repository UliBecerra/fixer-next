'use client'

import Header from "../../components/Header"
import abbreviations from '../../resources/abbreviations'
import React, {useEffect, useState, ChangeEvent } from "react";
import axios from 'axios';
import Footer from "../../components/Footer";
import currenciesBackup from '../../resources/currenciesBackup'

export default function Currencies() {
const [currencies, setCurrencies] = useState({});
const [currenciesSearch, setCurrenciesSearch] = useState('')


const currenciesWithSearch = Object.entries(currencies).filter(currency => 
  {
   
   if (!abbreviations[currency[0] as keyof typeof abbreviations] ) {
     return false
    }  
   
    return  (currency[0].toUpperCase().includes(currenciesSearch.toUpperCase()) || abbreviations[currency[0] as keyof typeof abbreviations].toUpperCase().includes(currenciesSearch.toUpperCase())) 
  }
  )
  const handleSearch =  (event : ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.target.value;
    setCurrenciesSearch(value)
   
   
  }

useEffect(() => {

      // ! Los datos son obtenidos a traves de la siguiente api pero por seguridad por seguridad mi navegador lo bloquea 
 /*  const URL = 'http://data.fixer.io/api/latest?access_key=0e1a407873ed6ebb4a6c0ac05daec89b'
  
  axios
  .get(URL)
  .then((res) => {
    setCurrencies(res.data.rates)
  })
  .catch((err) => console.log(err));


  */
  setCurrencies(currenciesBackup)
}, [])
useEffect(() =>{

},[currenciesSearch])
  return (
    <div className="p-1  sm:p-20 lg:pt-40 grid gap-10  place-content-center max-w-[100vw]">
      <Header/>
       <article className="">
        <h1 className="block w-0 max-w-xs px-4  text-[2.3rem] font-bold overflow-hidden  whitespace-nowrap  border-r-[.1em] animate-[typing_7s_steps(15)_1_normal_both,_blink_1s_steps(1)_infinite] m-auto ">Foreign exchange</h1>


      </article>
       <form className="flex justify-center w-full" >
        <input type="text" name="" id="" className="w-[350px] text-center pl-2 text-green-800 text-lg focus:font-bold focus:outline-none p-3 focus:placeholder:text-red-600 focus:placeholder:font-light rounded-md" placeholder="Ingresa el nombre/abreviatura de la divisa" value={currenciesSearch}  onChange={handleSearch}/>
      
      </form> 
      <ul className='grid   capitalize max-w-[100vw] lg:max-w-[1150px] px-2 gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] first-letter: place-content-center m-auto'>
        {
           currenciesWithSearch.map((entrie, i) => {
            

            return (

            <article key={i} className='grid place-content-center text-center border border-gray-600 rounded-md p-4'  > 
            
            <h3 className='font-bold'>{entrie[0]}</h3> 
            <h4 className="text-gray-400">{abbreviations[entrie[0] as keyof typeof abbreviations]}</h4>
            <p className="text-yellow-500">{currencies[entrie[0] as keyof typeof currencies]}</p>
            
         </article>
          )}) 
         
        } 
        
      </ul>

      <Footer></Footer>
    </div>
  )
}
