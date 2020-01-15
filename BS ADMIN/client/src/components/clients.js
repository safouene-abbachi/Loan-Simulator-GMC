import React from 'react';
import axios from 'axios'
import Modals from './ListExample'
import './admin.css'

class DatatablePage extends React.Component {
    state = {
        clients: []
    }
    componentWillMount() {
        axios.get("/api/Client")
            .then(res => {
                this.setState({ clients: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {


        let i = 0;
        return (
            <div className="mx-5 my-3">
                <h3 className="text-center mb-5" style={{ color: '#fa3380' }}>Users Management </h3>
                <table id="dtBasicExample" className="table table-striped table-bordered  mt-5 shadow-lg p-3 mb-5 bg-white rounded" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Classement</th>
                            <th className="th-sm">Name
      </th>
                            <th className="th-sm">Email
      </th>
                            <th className="th-sm">Rôle
      </th>
                            <th className="th-sm"> Delete
      </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map(el =>

                                <tr key={el._id}>
                                    <th>{i = i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.rôle}</td>
                                    
                                    
                                    <td><i className="fas fa-trash-alt deleteb"

                                        onClick={() => {

                                            axios.delete(`/api/Client/${el._id}`)
                                                .then(res => axios.get("/api/Client")
                                                    .then(res => {
                                                        this.setState({ clients: res.data });
                                                    }))
                                                .catch(error => {
                                                    console.log(error);
                                                })
                                        }}></i></td>
                                </tr>
                            )}
                    </tbody>
                    
                </table></div>
        )

    }
}

export default DatatablePage
