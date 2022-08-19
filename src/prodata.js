import React, { Component } from 'react'

export class Prodata extends Component {
  render() {
    
        return (
            <div style={{ marginLeft:'50px',marginTop:'10px', width:'450px',borderRadius:'10px',padding:'10px 10px 30px 10px ', border:'0.5px solid rgb(203,203,202)'}}>
             <h3>Bought by users</h3>
             {
               this.props.data.map((l,i)=>{
               console.log(this.props.name)
                 return(
                 <div style={{marginBottom:'20px',width:'360px',borderRadius:'10px',padding:'10px 10px 10px 10px ',  boxShadow:'  10px 10px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}}>
                        
                         <div style={{fontSize:'100%'}}>{this.props.name[parseInt(l)-1].name} </div>      
                         {/* {this.props.name[parseInt(l)-1].name}         */}
                 </div>
                 )
               })
             }
            </div>
           )
    
  }
}

export default Prodata