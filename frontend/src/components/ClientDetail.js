import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClientDetail = () => {

    const { id } = useParams();

    const [client, setClient] = useState([]);

    useEffect(() => {
        const getClient = () => {
            fetch(`http://localhost:3200/client/${id}`)
                .then(res => res.json())
                .then(res => setClient(res));
        }
        getClient()
    }, [id]);

    return (

        <div className='container'>
            <div className='row'>
                <div className='client-list'>
                    <h1>Client Detail</h1>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
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
                        {client.map(client => (
                                <tr key={client.id} className='client'>
                                    {
                                        client.image ? (
                                            <td><img src={client.image} alt='' className='image-detail'></img></td>
                                        ) : (
                                            <td><img src='https://maxler.com/local/templates/maxler/assets/img/not-found.png' alt=''></img></td>
                                        )
                                    }
                                    <td>{client.first_name}</td>
                                    <td>{client.last_name}</td>
                                    <td>{client.email}</td>
                                    <td>{client.gender}</td>
                                    <td>{client.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );

}

export default ClientDetail;