import React from 'react';
import _ from 'lodash'; 




class Table extends React.Component {


	render() {
		
		const { data, onSort, sort, sortField } = this.props;
        console.log(data);
        let data2 = _.map(data, function (item) {
        	return (
        		<tr key={item.id + item.phone}>
        		        <td>{item.id}</td>
        		        <td>{item.firstName}</td>
        		        <td>{item.lastName}</td>
        	            <td>{item.email}</td>
        		        <td>{item.phone}</td>
        		        </tr>)
        })

		return (
			<>
        <table className="table">
             <thead>
             <tr>
               <th onClick={onSort.bind(null, 'id')}>ID {sortField === 'id' ? <small>{sort}</small> : null}</th>
               <th onClick={onSort.bind(null, 'firstName')}>First Name {sortField === 'firstName' ? <small>{sort}</small> : null}</th>
               <th onClick={onSort.bind(null, 'lastName')}>Last Name {sortField === 'lastName' ? <small>{sort}</small> : null}</th>
               <th onClick={onSort.bind(null, 'email')}>E-mail {sortField === 'email' ? <small>{sort}</small> : null}</th>
               <th onClick={onSort.bind(null, 'phone')}>Phone {sortField === 'phone' ? <small>{sort}</small> : null}</th>
             </tr>
             </thead>
             <tbody>
               {data2}
   
             </tbody>
         </table>
         </>
			);

	}
}

export default Table;