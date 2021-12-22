import React, { useState } from 'react'
import axios from 'axios'

function AddExperience(props) {

    const [addExperience, setExperience] = useState({
        bucketlist_item: ``,
        finished: false,
        review: ``,
        city_id: props.match.params.cityId
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addExperience.bucketlist_item)
        axios.post(`http://localhost:3001/api/experiences`, {
            bucketlist_item: addExperience.bucketlist_item,
            finished: false,
            review: ``,
            city_id: addExperience.city_id
        })
        let newExperience = {
            bucketlist_item: ``,
            finished: false,
            review: ``,
            city_id: props.match.params.cityId
        }
        setExperience(newExperience)
        window.location.reload()
    }

    const handleChange = (e) => {
        const postedExperience = { ...addExperience }
        postedExperience[e.target.id] = e.target.value
        setExperience(postedExperience)
    }

    return (
        <div className='bucketlist-form'>
            <form className='add-form' 
            onSubmit={(e) => handleSubmit(e)}>
                    New item: <input className = 'input' type='text'
                    bucketlist_item='bucketlist_item'
                    onChange={(e) => handleChange(e)}
                    value={addExperience.bucketlist_item}
                    
                    id='bucketlist_item'/>
                <button className='button'>Add item</button>
            </form>
        </div>

    )
}

export default AddExperience;