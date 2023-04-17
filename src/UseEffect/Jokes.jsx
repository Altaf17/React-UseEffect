import React, { useState, useEffect } from 'react';
import Spinner from '../assets/spinner1.jpg'


const Jokes = () => {
  const [jokes, setJokes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.chucknorris.io/jokes/random";

  const GetJokes = () => {
    setIsLoading(true)
    fetch(url)
      .then((response) => {
        return response.json()
      }).then((data) => {
        setJokes(data)
        setIsLoading(false)
      })

  }

  useEffect(() => {
    GetJokes()
  }, []);
  return (
    <section className='--flex-center --100vh --bg-primary'>
      <div className="container --card --bg-light --p">
        <h2 className=''>Random Jokes Generator</h2>
        <div className="--line"></div>
        {isLoading ? (
          <div className="--center-all">
            <img src={Spinner} alt="loading.." width={100} />
          </div>
        ) : (<> <h4>Jokes Id: {jokes.id}</h4>
          <p>{jokes.value} </p></>)}

        <br />
        <button className='--btn --btn-primary'
          onClick={() => GetJokes()}>Generate Jokes</button>
      </div>
    </section>
  )
}

export default Jokes