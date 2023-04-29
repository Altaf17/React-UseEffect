import React, { useState } from 'react'

const ControlInputs = () => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, job)
        setName("")
        setJob("")
    }
    return (
        <div className='--bg-primary --mh-100vh'>
            <h1 className='--text-center --text-light'>Controlled Inputs</h1>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Job : </label>
                        <input
                            type="text"
                            name="job"
                            id=""
                            placeholder='Job'
                            value={job}
                            onChange={(e) => setJob(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='--btn --btn-primary --btn-block'>Submit User</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ControlInputs