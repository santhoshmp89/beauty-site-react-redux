import React, {Component} from 'react';

class ProductList extends Component {    

    render() {
        return(
            <div className="row">           
                {this.props.renderProductTile()}
            </div>
        )
    }
}

export default ProductList;