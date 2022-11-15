import React, {useState, useEffect} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

export default function Test() {
    const[data,setData] = useState([])
    const [val,setVal] = useState("")
    const[searchTerm,setSearchTerm] = useState("")
   
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
 
    useEffect(() => {
        setLoading(true);
        axios
          .get(`https://risko.herokuapp.com/company?_page=${page}&_limit=10`)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [page]);
      useEffect(() => {
        setFilteredCountries(
          data.filter((ele) =>
            ele.ProjectName.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search,data,page]);
   
    
  if (loading) {
    return <p>Loading companies...</p>;
  }
  return (
    <div>
    
    
     <input
        type="text"
        placeholder="Search Comapanies"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table style={{width: "80%", margin:"auto"}}>
      <thead>
          <tr>
            <th>#</th>
            <th>ProjectName</th>
            <th>Status</th>
            <th>LastUpdate</th>
            <th>Resources</th>
            <th>ProjectTimiline</th>
            <th>Estimation</th>
          </tr>
        </thead>
      </Table>
        
      {filteredCountries.map((company, idx) => (
        <Companydetails key={idx} {...company} />
      ))}
    
           
            <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </div>

  )
}
const Companydetails = (props) => {
    const {id, ProjectName,Status,LastUpdate, Resources, ProjectTimiline, Estimation } = props;
  
    return (
      <>
         <Table style={{width: "80%", margin:"auto"}}>
      
                  <tbody>
                 
                         <tr >
                         <td>{id}</td> 
            <td>{ProjectName}</td>
            <td>{Status}</td>
            <td>{LastUpdate}</td>
            <td>{Resources}</td>
            <td>{ProjectTimiline}</td>
            <td>{Estimation}</td>
                         </tr> 
                   
                  </tbody>
                 
             
                  </Table>
      </>
    );
  };