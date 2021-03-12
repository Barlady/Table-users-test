import React from "react";
import ReactPaginate from 'react-paginate';  
import './App.css';
import Table from './Table/Table';
import TableSearch from './TableSearch/TableSearch';
import RowView from './RowView';
import _ from 'lodash';     //библиотека для сортировки файлов


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [],
      search: '',
      sort: 'asc',  // 'desc'  
      sortField: 'id', // поле по умолчанию
      row: null,
      currentPage: 0,
    }
  }
  async componentDidMount() {
    const response = await fetch(` http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const data = await response.json()
    this.setState({data: _.orderBy(data, this.state.sortField, this.state.sort)})

  }

    onSort = (sortField) => {
      const cloneData = this.state.data.concat(); //копия массива data чтобы не менялся state data в состояние компонента для сортировки
      console.log(sortField);
      const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';  // меняем sort
      const orderedData = _.orderBy(cloneData, sortField, sortType); // для отсортировочного массива

      this.setState({ data : orderedData, sort : sortType, sortField : sortField })
    }

    onRowSelect = (row) => {
      console.log(row);
      this.setState({row : row})
    }

    pageChangeHandler = ({selected}) => {
      this.setState({currentPage: selected})
     
    }
    searchHandler = (search) => {
      console.log(search);
      this.setState({search, currentPage: 0})
    }
    getFilteredData(){
      const {data, search} = this.state

      if (!search) {
        return data
      }
     var result = data.filter(item => {
       return (
         item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
         item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
         item["email"].toLowerCase().includes(search.toLowerCase())
       );
     });
     if(!result.length){
       result = this.state.data
     }
      return result
    }
    
    

   render(){
    const pageSize = 50;

    const filteredData = this.getFilteredData();
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
   
      return (
    <div className="container">
    <TableSearch onSearch={this.searchHandler}/>
     <Table 
       data={displayData}
       onSort={this.onSort}
       sort={this.state.sort}
       sortField={this.state.sortField}
       onRowSelect={this.onRowSelect}
     />
  {this.state.data.length > pageSize 
  ?<ReactPaginate
    previousLabel={'<'}
    nextLabel={'>'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={this.pageChangeHandler}
    containerClassName={'pagination'}
    activeClassName={'active'}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    nextClassName="page-item"
    previousLinkClassName="page-link"
    nextLinkClassName="page-link"
    forcePage={this.state.currentPage} 
     /> : null
    }
    
     {
       this.state.row ? <RowView person={this.state.row} /> : null
     }
    </div>
  );
 }
}

export default App;
