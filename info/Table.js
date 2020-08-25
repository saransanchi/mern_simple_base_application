import React from 'react';


class InfoTable extends React.Component
{
    constructor()
    {
        super();
    }


    render()
    {
        return(


          
        
            <table className="table">
            <thead>
              <tr>
                <th>name</th>
                <th>city</th>
                <th>age</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
               
                 
                 {
                 
                  this.props.getData.length > 0 ?
                  (
                   this.props.getData.map(e=>
                     <tr key={e._id}><td>{e.Name}</td>
                     <td>{e.City}</td>
                     <td>{e.Age}</td>
                     <td><button type="submit" className="btn btn-default"
                     onClick={event=>{
                       this.props.setData(e)
                     }}
                     >Edit</button></td>
                     <td><button type="submit" className="btn btn-default"
                     onClick={event=>{
                      this.props.delData(e)
                    }}
                     >Delete</button></td>

                     
                    </tr>
                     )
                   )
                   :
                  (
                 
                    <tr><td>no data</td>
                    </tr> 
                  )

                   
              
               }
               
            </tbody>
          </table>
            
              
            

        )
    }
}

export default InfoTable;