import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DeleteExperience(props) {

const [experiences, setExperiences] = useState([])

const deleteExperience = (index) => {
    let experienceList = [...experiences]
    experienceList.splice(index,1)
    setExperiences(experienceList)
}

    const handleChange = (e) => {
        e.preventDefault()
        console.log(deleteExperience.props.bucketlist_item)
        axios.delete(`http://localhost:3001/api/experiences`, {
            bucketlist_item: deleteExperience.props.bucketlist_item,
            city_id: deleteExperience.props.city_id
        })

    }


    return (
        <div className='bucketlist-item'>
                <section>
                <button onClick = {(e) => handleChange(e)}
                className='deleteButton'>x</button>
            </section>
        </div>

    )
}

export default DeleteExperience;