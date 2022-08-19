import React, { Component } from 'react'
import styles from './homepage.module.css'
import Nav from './nav';
import Product from './product';
import Users from './users';
import axios from 'axios'
import Analytics from './analytics';
import Datamod from './datamod';
import Prodata from './prodata';

export class Homepage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          //general storing purposes
         users:[],
       
         product:[],
         show:null,
         pro:null,
         //self storing according to we want

         product_ids:{},
         user_ids:{},
         //how many we have as count
         productcount:[],
         usercount:[],
         routes:null,
         current:"analytics"
      }
    }
    showorders=(id)=>{
     console.log(id)
     console.log(this.state.user_ids[id+1])
     this.setState({show:this.state.user_ids[id+1]})
     window.scrollTo(0,0)
    }
    callaxiom=(e)=>{
      console.log(e)
      this.setState({current:e})
     
      if(e!='product'){
        // pro=null;
        this.setState({pro:null})
  } 
  if(e!='users'){
    this.setState({show:null})
}
    }
    bought=(id)=>{
      console.log(this.state.product_ids[id+1],id+1)
      console.log(Object.keys(this.state.product_ids[id+1]))
        this.setState({pro:Object.keys(this.state.product_ids[id+1])})
     window.scrollTo(0,0)

    }
    componentDidMount(){
        axios.get(' https://assessment.api.vweb.app/users').then((res)=>{
        // console.log(res.data)
        this.setState({users:res.data})

    })
    
    axios.get('https://assessment.api.vweb.app/products').then((res)=>{
        // console.log(res.data)
        this.setState({product:res.data})
        
    })
    axios.get('https://assessment.api.vweb.app/orders').then((res)=>{
        // console.log(res.data);
        var productcount={},user_order={};
        
        var x={},y={};
        res.data.map((l,i)=>{
          if(user_order[l.user_id]==undefined)
          {
            user_order[l.user_id]=1;
          }
          else{
            user_order[l.user_id]++;
          }


          if(productcount[l.product_id]==undefined){
            productcount[l.product_id]=1;
          }
          else{
              productcount[l.product_id]++;
          }
          if(y[l.user_id]==undefined){
            y[l.user_id]=[{order_id:l.order_id,product_id:l.product_id,quantity:l.quantity,date:l.order_date}]
          }else{
            y[l.user_id].push({order_id:l.order_id,product_id:l.product_id,quantity:l.quantity,date:l.order_date})
          }

            //y represents userid storing orders
            //x represents product bought by users
            // console.log(l);
            if(x[l.product_id]===undefined){
                x[l.product_id]={};
                if(x[l.product_id][l.user_id]==undefined){
                    x[l.product_id][l.user_id]=1;
                }

                
            }
            else{

                if(x[l.product_id][l.user_id]==undefined){
                    x[l.product_id][l.user_id]=1;
                }

            }
        })
        this.setState({product_ids:x});
        this.setState({user_ids:y});
        this.setState({usercount:user_order})
        this.setState({productcount:productcount})
        var temp={ "users":<Users user={this.state.users} showorders={this.showorders} usercount={user_order} ></Users>,
        "products": <Product  bought={this.bought} product={this.state.product}></Product>,
      "analytics":  <Analytics username={this.state.users} productname={this.state.product} userAnalytics={user_order} productAnalytics={productcount}></Analytics>}
        this.setState({routes:temp})
        // console.log("user analytics",y)
        // // this.setState({})
        // console.log("product count",productcount)
        // console.log("order count",user_order)
        // console.log('product analytics is',x)
    })
    }
  render() {
    return (
        <div>

        
       <div id={styles.main}>
          <div id={styles.nav}>
          <Nav pin={this.callaxiom}></Nav>
          </div>
      
  
          <div className={styles.right} >
            {
              this.state.routes!=null?this.state.routes[this.state.current]:<div>Loading.....</div>
            }

            {/* <div>user length is{this.state.users.length}</div> */}
          {/* <Users user={this.state.users} usercount={this.state.usercount} ></Users> */}
          {/* <Product product={this.state.product}></Product> */}
          {/* {
            this.state.users.length>0 && this.state.product.length>0 && Object.keys(this.state.productcount).length>0 &&Object.keys(this.state.usercount).length>0 &&(
          <Analytics username={this.state.users} productname={this.state.product} userAnalytics={this.state.usercount} productAnalytics={this.state.productcount}></Analytics>
            )
          } */}
          </div>
          {
              this.state.show!=null&& (<div><Datamod name={this.state.product} data={this.state.show}/></div>)
          }
          {
              this.state.pro!=null&& (<div><Prodata name={this.state.users} data={this.state.pro}/></div>)
          }
        
       </div>
       
  
     </div>
    )
  }
}

export default Homepage;