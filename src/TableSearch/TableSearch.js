 import React from 'react';

 class TableSearch extends React.Component {
 	constructor(props) {
 		super(props);
 		this.state = {
 			value : ' '
 		}

 	}
 	valueChangeHandler = (event) => {
 	       
 	        this.setState({ value : event.target.value})
 	        console.log(this.state.value);

 	}

 	render(props) {
 		let onSearch = this.props.onSearch;
 		
 		return(
 			<>
 			<div className="input-group mb-3 mt-3">
 			             <div className="input-group-prepend">
 			                 <button 
 			                    className="btn btn-outline-secondary"
 			                    onClick={() => onSearch(this.state.value)} >Search</button>
 			            </div>
 			            <input 
 			                type="text" 
 			                className="form-control"
 			                onChange={this.valueChangeHandler} 
 			                value={this.value}
 			            />
 			        </div> 	
 			        <p className="text-center">
 			          The search will show any matching values. If there is no match,
 			          then all the data.
 			        </p>
 			        <p className="text-center">To sort, click on the title.</p>
 			        <p className="text-center">Click on each row - view details</p>		
        </>
 	  );
 	}
 }

 export default TableSearch;