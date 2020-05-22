import React, {useEffect, useState}  from 'react'
import { HappyForm } from './components/HappyForm'
import { Happythoughts } from './components/Happythoughts'

const url = 'https://ebbabw-project-happy-thoughts.herokuapp.com/thoughts'


export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setThoughts(json))
  },  [postedMessage])

  const handleFromSubmit = message => {
    setPostedMessage(message)
  }
  

const sendHeart = (id) => {
  const end = `${url}/${_id}/like`


fetch(end, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
}).then((res) => res.json())
  .then((updateMessage) => {
    const updatedThoughts = [...thoughts]
    const index = thoughts.findIndex(thought => thought._id === id)
    updatedThoughts.splice(index, 1, updateMessage)
    setPostedMessage(setPostedMessage)

  })


}

return (
    <main>


      <HappyForm handleFromSubmit={handleFromSubmit}/>

      {thoughts.map(thought => (

      <Happythoughts key={thought._id} thought={thought} onLiked={sendHeart} /> 
      ))}


    </main>
  )
}
