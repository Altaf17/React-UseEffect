import { useState } from "react";

const MultipleControlInputs = () => {
    const [person, setPerson] = useState({
        name: "",
        job: "",
        city: "",
        company: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = person
        console.log(newUser)
        setPerson({ name: "", job: "", city: "", company: "" })

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
                            value={person.name}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label>Job : </label>
                        <input
                            type="text"
                            name="job"
                            id=""
                            placeholder='Job'
                            value={person.job}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label>City : </label>
                        <input
                            type="text"
                            name="city"
                            id=""
                            placeholder='City'
                            value={person.city}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label>Company : </label>
                        <input
                            type="text"
                            name="company"
                            id=""
                            placeholder='Company'
                            value={person.company}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <button type='submit' className='--btn --btn-primary --btn-block'>Submit User</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default MultipleControlInputs