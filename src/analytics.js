import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'

function Order(){
  const element=(<div>
    
  </div>)
}

export class Analytics extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userdata:[],
       userlabels:[],
       productdata:[],
       productlabels:[],
    }
  }
  componentDidMount= ()=>{
    console.log("props is",this.props)
    var userl=[],productl=[]
    // console.log(Array.from(this.props.userAnalytics))
    // console.log(this.props.userAnalytics)
    console.log("keys are",Object.keys(this.props.userAnalytics))
    console.log("values are",Object.values(this.props.userAnalytics))
    Object.keys(this.props.userAnalytics).map((l,i)=>{
      userl.push(this.props.username[i].name);
      // console.log(parseInt(l),i)
      console.log(this.props.username[i].name)
      
      
      // console.log(this.props.usernames[parseInt(l)-1].name);
    })
    Object.keys(this.props.productAnalytics).map((l,i)=>{
      productl.push(this.props.productname[i].name);
      // console.log(parseInt(l),i)
      console.log(this.props.productname[i].name)
      
      
      // console.log(this.props.usernames[parseInt(l)-1].name);
    })
    
    // this.props.userAnalytics.map((l,i)=>{

      // console.log(l)
    //   userd.push(l[i+1])
    //   userl.push(this.props.username[i])
    //  console.log("n maop",userl,userd)

    // })
    //  this.props.productAnalytics.map((l,i)=>{

    //   console.log(l)
    //   // productd.push(l[i+1])
    //   // productl.push(this.props.productname[i])
     

    // })
    this.setState({userdata:Object.values(this.props.userAnalytics)})
    this.setState({userlabels:userl})
    this.setState({productlabels:productl})
    this.setState({productdata:Object.values(this.props.productAnalytics)})
    console.log(userl,"hhehhheheh ")
  }
  
  render() {
    
    return (
      <div>
        {
        this.state.userdata.length>0?
       <div >
         <div style={{height:'500px', margin:'10px 10px 30px 10px ',boxShadow:'  20px 20px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}}>
         <Bar
       style={{height:'500px'}}
        data={{
          labels:this.state.userlabels,
          datasets:[
            {
              data:this.state.userdata,
              label:'total ordered products by user',
              backgroundColor:'blue'
            }
          ]
        }}
        ></Bar>
        </div>
        
        <div style={{height:'500px',margin:'10px 10px 30px 10px ', boxShadow:'  20px 20px 20px grey',borderLeft:'0.5px solid rgb(203,203,202)',borderTop:'0.5px solid rgb(203,203,202)'}}>
         {/* <Bar
       style={{height:'500px'}}
        data={{
          labels:this.state.productlabels,
          datasets:[
            {
              data:this.state.productdata,
              label:'odered',
              backgroundColor:'blue'
            }
          ]
        }}
        ></Bar> */}
        <Line data={
       {   labels:this.state.productlabels,
          datasets:[
            {
              label:'product ordered ',
              data:this.state.productdata,
              backgroundColor:'skyblue' ,
              fill:false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]}
        }>hello</Line>
        </div>
       </div>:<div>Loading....</div>
      }
      </div>
    )
  }
}

export default Analytics