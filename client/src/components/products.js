import React from 'react'
import {connect} from 'react-redux';
import { displayAvailableItems } from '../actions';
import Product from './product';

class Products extends React.Component {
    constructor(props){
        super(props);
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
                        <div key ={Index}>
                        <h3>Name:{Item.Name}</h3>
                        <h4>Price:{Item.Price}</h4>
                        </div>
                        // <div index={Index}>
                        // {/* <Product Name={Item.Name} Price ={Item.Price}/> */}
                        // </div>
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
        DisplayItems:dispatch=>(displayAvailableItems())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);