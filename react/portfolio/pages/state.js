import { useState } from "react"

function Test(){
    return <div>
        <Section/>
    </div>
}




export default Test

const cards = [
    {
        id: 1,
        title: 'card title'
    },
    {
        id: 2,
        title: 'card title'
    },
    {
        id: 3,
        title: 'card title'
    },
    {
        id: 4,
        title: 'card title'
    }
]

const Section = () => {
    const [counter, setCounter] = useState()

   const incrementCounter = ()=> {
    setCounter(counter + 1)
   }

   console.log(counter)
   return <div>
     {cards.map((card)=> {
        return <Card title={card.title} key={card.id} id={card.id} />
    })}

    <button onClick={incrementCounter}>add adult count</button>
   </div>
}


const Card = (props) => {
    const { title }= props
    return <div className="w-[200px] h-10 border bg-red-700">{title}</div>
}
