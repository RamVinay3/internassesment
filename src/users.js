import React, { Component } from 'react'
import { Avatar, Image } from 'antd';
import styles from './users.module.css'
import { RightOutlined} from '@ant-design/icons';


export class Users extends Component {
    // showorders=(id)=>{
    //     console.log("i was called here");
    //     props.watch(id)
    // }

   
  render() {
    return (
      <div  className={styles.container} >
          {
            this.props.user.map((l,i)=>{
              // console.log(l,"is l")
                return(
                // <div>helo{/l.name}</div>         
                <div  style={{width:'500px',margin:'10px 10px 30px 10px ',borderRadius:'10px',padding:'10px 10px 10px 10px ',  boxShadow:'  10px 10px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}} >
                  <div >
                  <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:'10px' ,marginBottom:'10px'}}>{l.name[0]}</Avatar>
                  <span>{l.name}</span>
                  </div>
                  <hr ></hr>
                  <div style={{display:'flex',textAlign:'center'}}>
                    <div style={{borderRight:'1px solid black',width:'250px',alignItems:'center'}}>No.of orders: {this.props.usercount[i+1]}</div>
                    <div style={{width:'250px',alignItems:'center'}} onClick={()=>{this.props.showorders(i)}}>View orders <RightOutlined  /></div>
                  </div>
                </div>        
                )
            })
          }
      </div>
    // <div>
    //       <Avatar size="large" style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:'10px' ,marginBottom:'10px'}}>M</Avatar>
          
    //       <span style={{fontSize:'25px'}}>Magam venkata vinay kumar</span>
    //       <div style={{display:'flex',justifyContent:'space-around'}}>
    //         <div>No.of orders:27</div>
    //         <div onClick={this.showorders}>view orders <RightOutlined /></div>
    //       </div>
    // </div>
  
    )
  }
}

export default Users