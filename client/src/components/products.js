import React from 'react'
import {connect} from 'react-redux';
import { displayAvailableItems, addProductToCart } from '../actions';
import Product from './product';

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Item:[],
        }
    }
    componentDidMount() {
        var InitializeValues =()=>{ this.props.DisplayItems()};
        InitializeValues();
        
    }
    
    render(){
    return (
        <div>
            <h1>Products</h1>
            {
                (this.props.AvailableItems !== undefined)?
                    <div>{
                        this.props.AvailableItems.map((Item,Index)=>(
                        // <div key ={Index}>
                        // <h3>Name:{Item.Name}</h3>
                        // <h4>Price:{Item.Price}</h4>
                        // </div>
                        <div key={Index}>
                        <Product Name={Item.Name} Price ={Item.Price}/>
                        <button onClick ={()=>{ this.props.AddToCart(Item)}}>Add to cart</button>
                        </div>
                    ))}</div>
                :"No Item available"
            }
        </div>
    )
}
}

const mapStateToProps=(state)=>({
    AvailableItems:state.AvailableItems,
});
const mapDispatchToProps=(dispatch)=>{
    return{
        DisplayItems:dispatch=>(displayAvailableItems()),
        AddToCart:Item => dispatch(addProductToCart(Item))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);