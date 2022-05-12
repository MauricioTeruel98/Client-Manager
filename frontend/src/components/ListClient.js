import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListClient = () => {

    const [clients, setClients] = useState([]);
    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const getClients = () => {
            fetch('http://localhost:3200/clients')
                .then(res => res.json())
                .then(res => setClients(res))
        }
        getClients()
        setListUpdated(false)
    }, [listUpdated]);

    const handleDelete = (clientIndex) => {

        const position = clients.indexOf(clientIndex) 

        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3200/delete/' + position, requestInit)
            .then(res => res.json())

        setListUpdated(true);

    }

    return (

        <div className='container'>
            <div className='client-list'>
                <h1>Clients List</h1>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>SURNAME</th>
                                    <th>EMAIL</th>
                                    <th>GENDER</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map(client => (
                                    <tr key={client.id} className='client'>
                                        {
                                            client.image ? (
                                                <td><img src={client.image} alt=''></img></td>
                                            ) : (
                                                <td><img src='https://maxler.com/local/templates/maxler/assets/img/not-found.png' alt=''></img></td>
                                            )
                                        }
                                        <td>{client.first_name}</td>
                                        <td>{client.last_name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.gender}</td>
                                        <td>{client.id}</td>
                                        <td>
                                            <div className="mb-2">
                                                <button onClick={() => handleDelete(client)} className="btn-sm btn btn-danger">Delete</button>
                                            </div>
                                            <div className='mb-2'>
                                                <Link to={`/customers/${client.id}`} className="btn-p btn-sm btn btn-primary">Detail</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default ListClient;