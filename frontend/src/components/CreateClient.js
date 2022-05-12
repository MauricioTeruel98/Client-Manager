import React, { useState } from 'react';

const CreateClient = ({ setListUpdated }) => {

    const [client, setClient] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        image: ''
    })

    const handleChange = e => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }

    let { id, first_name, last_name, email, gender, image } = client

    const handleSubmit = () => {

        if (first_name === '' || last_name === '' || email === '' || gender === '' || id === '') {
            alert('All fields are required');
        } else {
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(client)
            }
            fetch('http://localhost:3200/create', requestInit);

            setListUpdated(true)

            setClient({
                id: null,
                first_name: '',
                last_name: '',
                email: '',
                gender: '',
                image: ''
            })
        }

    }

    return (

        <div className='container-sm'>
            <h1 className='client-list'>Create Client</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='first_name' className='form-label'>Name</label>
                    <input value={first_name} name='first_name' onChange={handleChange} type='text' id='first_name' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='last_name' className='form-label'>Surname</label>
                    <input value={last_name} name='last_name' onChange={handleChange} type='text' id='last_name' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input value={email} name='email' onChange={handleChange} type='text' id='email' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='gender' className='form-label'>Gender</label>
                    <input value={gender} name='gender' onChange={handleChange} type='text' id='gender' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='image' className='form-label'>Image</label>
                    <input value={image} name='image' onChange={handleChange} type='text' id='image' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='id' className='form-label'>Id</label>
                    <input value={id} name='id' onChange={handleChange} type='number' id='id' className='form-control' />
                </div>
                <div class="alert alert-warning" role="alert">
                    The ID field cannot be repeated
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success' >Submit</button>
                </div>
            </form>
        </div>

    );

}

export default CreateClient;