import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react'

const UncontrolInputs = () => {
    const [] = useState();
    const nameInputRef = useRef(null)
    const jobInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const enterName = nameInputRef.current.value
        const enterJob = jobInputRef.current.value
        console.log(enterName)
        console.log(enterJob)
    }
    // for focus of input
    useEffect(() => {
        nameInputRef.current.focus();
    }, [])
    // console.log(nameInputRef,jobInputRef)
    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-center --text-light'>UnControlled Inputs</h1>
            <div className="--card --bg-light --width-500px --flex-center">
                <form className="--form-control"
                    onSubmit={handleSubmit}>
                    <div>
                        <label>Name : </label>
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder='Name'
                            ref={nameInputRef}
                        />
                    </div>
                    <div>
                        <label>Job : </label>
                        <input
                            type="text"
                            name="job"
                            id=""
                            placeholder='Job'
                            ref={jobInputRef}
                        />
                    </div>
                    <div>
                        <button type='submit' className='--btn --btn-primary --btn-block'>Submit User</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UncontrolInputs