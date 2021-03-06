import React from 'react';

const ProductTime = props => {
    return (
        <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.brand}</h6>
                    <p className="card-text">{props.data.description}</p>
                    <button className="btn btn-secondary" onClick={() => props.handleAddToCart(props.data)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductTime;