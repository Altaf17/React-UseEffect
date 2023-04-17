import React, { useState, useEffect } from 'react'

const GithubUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const url = "https://api.github.com/users";

    const getUsersdata = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Somthing Went Wrong")
            }
            const data = await response.json();
            setUsers(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(true)
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getUsersdata()

    }, []);
    return (
        <div className='--bg-primary --py2'>
            <div className="container">
                <header>
                    <h1 className='--text-center --text-light'>GitHub Users</h1>
                    <div className="--line"></div>
                </header>
                {isLoading && (
                    <div className='--center-all --p'> <h4 className='--text-light'>Loading...</h4> </div>
                )}
                <div className="--grid-25 --py">
                    {error ? (
                        <h4 className='--text-light'>Somthing Went Wrong</h4>
                    ) : (users.map((user) => {
                        const { id, avatar_url, login, html_url } = user
                        return (

                            <div key={id} className="--card --bg-light --p --flex-start">
                                <img src={avatar_url} alt="user" className='--profile-img --mx' />
                                <span>
                                    <h4>{login}</h4>
                                    <a href={html_url} target='_blank'>View Profile</a>
                                </span>
                            </div>
                        )
                    }))}

                </div>
            </div>
        </div>
    )
}

export default GithubUser