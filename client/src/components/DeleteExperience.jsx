// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function DeleteExperience(props) {

// const [experiences, setExperiences] = useState([])



//     const handleChange = (e) => {
//         e.preventDefault()
//         console.log(deleteExperience.props.bucketlist_item)
//         axios.delete(`http://localhost:3001/api/experiences`, {
//             bucketlist_item: remove(experiences.bucketlist_item),
//             city_id: remove(experiences.city_id)
//         })

//     }


//     return (
//         <div className='bucketlist-item'>
//             <ul>
//                 {props.experiences.map((experience, index) => (
//         <li key={index}>
//           {experience} 
//                 <button onClick = {(e) => handleChange(e)}
//                 className='deleteButton'>x</button>
//                 </li>
//                 ))}
//                 </ul>
//         </div>

//     )
// }

// export default DeleteExperience;