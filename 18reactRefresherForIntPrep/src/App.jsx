import React, { useCallback, useState } from 'react'
import Button from './components/Button'
import ShowCount from './components/ShowCount'
import Title from './components/Title'

export default function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  

  const incerementByOne = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  },[])


  const incerementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  },[])
  
  return (
    <div>
      <Title />
      <ShowCount count={count} title='Counter 1' />
      <Button handleClick={incerementByOne}>increment by one</Button>
      <hr />
      <ShowCount count={count2} title='Counter 2' />
      <Button handleClick={incerementByFive}>increment by five</Button>
    </div>
  )
}
