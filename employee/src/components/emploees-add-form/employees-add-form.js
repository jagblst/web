import {Component} from 'react';
import './employees-add-form.css';
import React from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Прізвище та ім'я " 
                        name="name"
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;