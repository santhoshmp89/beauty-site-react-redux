import React from 'react';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.name !== "" && this.state.age !== "") {
            console.log(this.state.name, this.state.age);
            this.props.handleAddUser({name: this.state.name, age: this.state.age})       
        }        
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Name" value={this.state.name} onChange={this.handleName} />
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Age</label>
                    <input type="text" className="form-control" placeholder="Age" value={this.state.age} onChange={this.handleAge} />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
                </div>
            </form>
        )
    }    
}

export default AddUserForm