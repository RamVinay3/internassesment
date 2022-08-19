import React, { Component } from 'react'
import { Avatar, Image } from 'antd';

import { RightOutlined} from '@ant-design/icons';

export class Product extends Component {
  render() {
    return (
        <div>
           {
             this.props.product.map((l,i)=>{
                return(
          //       <div style={{marginBottom:'10px',border:'1px solid black'}}>
          //       <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:'10px' ,marginBottom:'10px'}}>{l.name[0]}</Avatar>
                
          //       <span style={{fontSize:'25px'}}>{l.name}</span>
          //       <div style={{display:'flex',justifyContent:'space-around'}}>
          //         <div> stock: {l.stock}</div>
          //         <div>price: {l.selling_price}</div>
          //         <div onClick={this.showorders}>ordered by <RightOutlined /></div>
          //       </div>
          // </div>
          <div style={{width:'500px',margin:'10px 10px 30px 10px ',borderRadius:'10px',padding:'10px 10px 10px 10px ',  boxShadow:'  10px 10px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}} >
          <div >
          <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:'10px' ,marginBottom:'10px'}}>{l.name[0]}</Avatar>
          <span>{l.name}</span>
          </div>
          <hr ></hr>
          <div style={{display:'flex',textAlign:'center'}}>
            <div style={{borderRight:'1px solid black',width:'250px',alignItems:'center'}}>stock: {l.stock}</div>
            <div style={{borderRight:'1px solid black',width:'250px',alignItems:'center'}}>price: {l.selling_price}</div>
            <div style={{width:'250px',alignItems:'center'}} onClick={()=>{this.props.bought(i)}}>Bought by <RightOutlined  /></div>
          </div>
        </div> 
                    
                )
            })
           }
        </div>
//         <div style={{marginBottom:'1px'}}>
//         <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:'10px' ,marginBottom:'10px'}}>M</Avatar>
        
//         <span style={{fontSize:'25px'}}>Name of product</span>
//         <div style={{display:'flex',justifyContent:'space-around'}}>
//           <div>stock:27</div>
//           <div onClick={this.showorders}>ordered by <RightOutlined /></div>
//         </div>
//   </div>
    )
  }
}

export default Product