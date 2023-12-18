import React, { useCallback, useMemo, useState } from 'react'
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
  },[]) // react will forget the function if the only dependency changes
  // if we have used a count in this function we had to giv the dependencies in the array count because count is in the outside 

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1; //costly operation
    return count % 2 === 0;
  },[count])

  return (
    <div>
      <Title />
      <ShowCount count={count} title='Counter 1' />
      <span>{isEvenOrOdd ? 'even' : 'odd'}</span>
      <Button handleClick={incerementByOne}>increment by one</Button>
      <hr />
      <ShowCount count={count2} title='Counter 2' />
      <Button handleClick={incerementByFive}>increment by five</Button>
    </div>
  )
}
