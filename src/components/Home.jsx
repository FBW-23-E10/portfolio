import React from 'react'

function Home() {
    const [counter, setCounter] =  React.useState(0);
  return (
    <div>
        <h1>Home Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur exercitationem, expedita iusto incidunt odio nesciunt veritatis dolorum voluptates libero, quam ex eveniet aliquam quod accusantium non autem, sed sint recusandae.</p>

        <button onClick={()=>setCounter(value=>value+1)}>Click Counter {counter}</button>

    </div>
  )
}

export default Home