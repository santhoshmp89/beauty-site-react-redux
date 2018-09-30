import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import ProductTile from '../components/ProductTile';
import { connect } from 'react-redux';
import {addToCart, fetchData, addUserAction} from '../actions';
import AddUserForm from '../components/AddUserForm';

import {bindActionCreators} from 'redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            cart:[],
            showAddUserForm: false
        }
    }

    componentDidMount() {
        // fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        // .then(data => data.json())
        // .then(json => {
        //     this.setState({
        //         lists: json
        //     })
        // })    
        this.props.fetchData();
    }

    componentDidUpdate() {
        if(this.state.lists.length == 0) {
            this.setState({
                lists: this.props.makeUpData
            })
        }
    }

    handleShowAddUserForm = () => {        
        this.setState((state, props) => {
           return {
               showAddUserForm: !state.showAddUserForm
           }
        })
    }
    
    renderProductTile = () => {        
        return this.state.lists.map(data => <ProductTile key={data.id} data={data} handleAddToCart={this.props.addToListAction}/>)
    }

    render(){
        return(
            <div>
                <NavBar cartList={this.props.addToCartLists} handleForm={this.handleShowAddUserForm} />                
                <div className="container">
                    {this.state.showAddUserForm && 
                        <div> 
                            <br />
                            <AddUserForm handleAddUser={this.props.addUser}/>
                            <br />
                        </div>
                    }
                    <ProductsList renderProductTile={this.renderProductTile}/>
                </div>
                
            </div>
        )        
    }

 }

 const mapStateToProps = (state) => {
    return {
        addToCartLists: state.addToCartList,
        makeUpData: state.makeUpData,
        usersList: state.usersList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToListAction: addToCart,
        fetchData: fetchData,
        addUser: addUserAction
    }, dispatch)
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         addToListAction: addToCart
//     }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Main);