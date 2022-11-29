import React, {useState} from "react";
import DepartmentData from "../components/DepartmentData";
import DepartmentDataTable from "../components/DepartmentDataTable";
import { Layout } from "../components";

const Departments = () => {

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     name:'',
     code:'',
     noofemployees:''
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {name:'', code:'', noofemployees:''}
      setformInputData(emptyInput)
     }
 }  

 return(
     <Layout>
     <div className="container">
     <div className="row">
         <div className="pt-10">
         <DepartmentData handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
         <DepartmentDataTable tableData={tableData} />
         </div>
     </div>
    </div>
     </Layout>
 );
}
export default Departments;