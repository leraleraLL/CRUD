import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Form from './Form';
import Table from './Table';
import axios from 'axios';

const url = `http://178.128.196.163:3000/api/records`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			table: [],
		};
		this.getUser = this.getUser.bind(this);
		this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
		this.removeUser = this.removeUser.bind(this);	
	}

  componentDidMount() {
		this.getUser();
	}
	async getUser() {
		let result = await axios.get(`${url}`);
		this.setState({ table: result.data });
	}

	async addUser(name, surname, email) {
		const result = await axios.put(`${url}`, {
			data: { name, surname, email },
		});
		this.setState({ table: [...this.state.table, result.data] });
	}

	async editUser(id, name, surname, email) {
		await axios.post(`${url}/${id}`, { data: { name, surname, email } });
	}

  async removeUser(id) {
		await axios.delete(`${url}/${id}`);
		this.setState({
			table: this.state.table.filter((line) => line._id !== id),
		});
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
          <h5 style={{color:'white'}}>If you want... fill the table</h5>
				</div>
          
        <div className='wrapper'>
          <div className="content">
        {this.state.table && 
          <Table editUser={this.editUser} 
              removeUser={this.removeUser} 
              table={this.state.table} />}
					<Form addUser={this.addUser} />
					</div>
        </div>
				
			</div>
		);
	}
}

export default App;