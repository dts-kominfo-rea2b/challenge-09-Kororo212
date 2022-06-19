// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';


const Contact = ({dataKontak}) => {
    const {name,phone,email,photo} = dataKontak;
    return ( <div className='contact'><div className='img'>
        <img src={photo} style={{width:'100px',height:'100px'}} alt='test'/>
        </div>
        <div className='isi'>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
        </div>
        </div>
    )
}

export default Contact;
