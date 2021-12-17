import React, { useState, useEffect } from 'react'
import axios from axios

function AddExperience(props) {
    const [experiences, manageExperiences] = useState([])

    const [addExperience, setExperience] = useState({
        bucketlist_item: ``,
        city_id: props.match.params.cityId
    })

    const addItem = () => {
        let newList = [...experiences, 'new experience']
        manageExperiences(newList)
        console.log(experiences)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost3001/api/experiences`, {
            bucketlist_item: addExperience.bucketlist_item,
            city_id: addExperience.city_id
        })
        let newExperience = {
            bucketlist_item: ``
        }
        setExperience(newExperience)
        window.location.reload()
    }

    const handleChange = (e) => {
        const postedExperience = { ...addExperience }
        postedExperience[e.target.id] = e.target.value
        setExperience(postedExperience)
        console.log(postedExperience)
    }



    return (
        <div className='bucketlist-form'>
            <h1 className='bucketlist-title'>Add bucketlist item</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <section className='input'>
                    New item: <input type='text'
                    name='experience'
                    value={addExperience.bucketlist_item}
                    onChange={(e) => handleChange(e)}
                    id='experience'/>
                </section>
                <button className='addButton'>Add item</button>
            </form>
        </div>

    )
}

export default AddExperience