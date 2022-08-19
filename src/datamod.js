import axios from 'axios'
import React, { Component } from 'react'

export class Datamod extends Component {


  render() {
    return (
     <div style={{ marginLeft:'50px',marginTop:'10px', width:'450px',borderRadius:'10px',padding:'10px 10px 30px 10px ', border:'0.5px solid rgb(203,203,202)'}}>
      <h3>Orders</h3>
      {
        this.props.data.map((l,i)=>{
        
          return(
          <div style={{marginBottom:'20px',width:'360px',borderRadius:'10px',padding:'10px 10px 10px 10px ',  boxShadow:'  10px 10px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}}>
                  <div style={{color:'grey',fontSize:'50%',fontWeight:'bold'}}>order_id:{l.order_id}</div>
                  <div style={{fontSize:'100%'}}>{this.props.name[l.product_id-1].name}</div>
                  <div style={{fontSize:'65%'}}>quantity:{l.quantity}</div>
                
        
      </div>
          )
        })
      }
     </div>
    )
  }
}

export default Datamod