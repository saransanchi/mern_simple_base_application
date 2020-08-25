import React from 'react';
import InfoForm from "./Form";
import InfoTable from './Table';
import axios from 'axios';

class App extends React.Component
{
    constructor(){
        super();
        this.state={
            data:[],
            editData:[]
        }
    }


    componentDidMount(){
        this.getAll();
    }

    

     create=data=>{
         if(!data.isEdit){
            axios.post("http://localhost:5000/info",data).then(res=>{
             console.log(res);
             this.getAll();
         })
         }
         else{
            axios.put("http://localhost:5000/info/update",data).then(res=>{
                console.log(res);
                this.getAll();
            })
         }
     }


      getAll(props){
          axios.get("http://localhost:5000/info").then(res=>{
          
            
            this.setState({
                data:res.data
            })
            console.log(res.data);
        })
    }

    update=data=>{
        console.log(data);
        this.setState(
            {
                editData:data
            }
        )
    }
    del=data=>{
        console.log(data)
        var option = window.confirm('Are you sure want to delete  ${data.Name}')
        if (option)
        {
            axios.delete('http://localhost:5000/info/delete/${data._id}',data).then(res=>{
                console.log(res);
                this.getAll();
            })
    
    }



}
    



    render()
    {
        return(
            <div className="container mt-4">
            <div className="row">
                <div className="col-6" >
                <InfoForm myData={this.create}  setForm={this.state.editData}/>
                </div>
                <div className="col-6">
                <InfoTable getData={this.state.data} setData={this.update}  delData={this.del}/> 
                </div>
            
            
            
            </div>
            
            
            </div>
        )
    }
}

export default App;