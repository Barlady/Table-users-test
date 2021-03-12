import React from 'react';




class Table extends React.Component {

	render() {
		let data = this.props.data;
		console.log(data);
		let onSort = this.props.onSort;
		let sort = this.props.sort;
		let sortField = this.props.sortField;
		

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
                 { data.map(item =>(
                     <tr key={item.id + item.phone}>
                         <td>{item.id}</td>
                         <td>{item.firstName}</td>
                         <td>{item.lastName}</td>
                         <td>{item.email}</td>
                         <td>{item.phone}</td>
                     </tr>
                 ))}
             </tbody>
         </table>
         </>
			);

	}
}

export default Table;