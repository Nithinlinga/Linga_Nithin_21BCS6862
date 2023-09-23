import React from 'react'
import Car from '../components/displaycar.js'
import Sdata from '../components/Sdata.jsx'
const Models = () => {
  return (
    <>
      <h1>Models</h1>
      <Car img={Sdata[0].image} title={Sdata[0].title} price={Sdata[0].Price}/>
      <Car img={Sdata[1].image} title={Sdata[1].title} price={Sdata[1].Price}/>
      <Car img={Sdata[2].image} title={Sdata[2].title} price={Sdata[2].Price}/>
      <Car img={Sdata[3].image} title={Sdata[3].title} price={Sdata[3].Price}/>
      <Car img={Sdata[4].image} title={Sdata[4].title} price={Sdata[4].Price}/>
      <Car img={Sdata[5].image} title={Sdata[5].title} price={Sdata[5].Price}/>
      <Car img={Sdata[6].image} title={Sdata[6].title} price={Sdata[6].Price}/>
      <Car img={Sdata[7].image} title={Sdata[7].title} price={Sdata[7].Price}/>

    </>

  )
}

export default Models
