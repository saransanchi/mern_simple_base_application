import React from 'react';


class InfoForm extends React.Component
{
    constructor(){
        super();
        this.state={
           _id:"",
           isEdit:false,
            Name:"",
            Age:"",
            City:""
        }
    }
    InfoChange=event=>{
        const {name,value} = event.target;
        this.setState(
            {
                [name]:value
            }
        )
    }

    InfoSubmit=event=>{
        if(!this.state.isEdit){
        let data={
            _id:this.state._id,
            isEdit:this.state.isEdit,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        this.props.myData(data);
    }
    else{
        
        let data={
            _id:this.state._id,
            isEdit:this.state.isEdit,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        this.props.myData(data);

    }
    }

   componentWillReceiveProps(props){
       console.log(this.props.setForm);
       if(this.props.setForm._id !=null){
           this.setState({
            isEdit:true,
            _id:props.setForm._id,
            Name:props.setForm.Name,
            Age:props.setForm.Age,
            City:props.setForm.City
           
           })
       }
   }



    render()
    {
        return(
        
            <form  onSubmit={this.InfoSubmit} autoComplete="off">
     <div className="form-group">
          <label>Name:</label>
          <input type="type" className="form-control" placeholder="enter name"
          onChange={this.InfoChange}
          name="Name"
          value={this.state.Name}
          />
     </div>
     <div className="form-group">
          <label>City:</label>
          <input type="type" className="form-control" placeholder="enter city"
          onChange={this.InfoChange}
          name="City"
          value={this.state.City}
          
          />
    </div>
    <div className="form-group">
    <label>Age:</label>
    <input type="type" className="form-control" placeholder="enter Age"
    onChange={this.InfoChange}
    name="Age"
     value={this.state.Age}
    />
</div>
    
  <button type="submit" className="btn btn-default">{this.state.isEdit ? 'update':'create'}</button>
</form>
            

        )
    }
}

export default InfoForm;