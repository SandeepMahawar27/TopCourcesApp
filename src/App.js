import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards'
import { apiUrl, filterData } from './data';
import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
      let responce = await fetch(apiUrl);
      let output = await responce.json();
      // output ->
      setCourses(output.data);
    }
  
      catch(error){
             toast.error("Something went Wrong")
      }
      setLoading(false);
    }
     useEffect( () => {
          fetchData();
     }, []);
    
  

  return (
   <>
   <div className='min-h flex flex-col bg-zinc-800'>
   <div>
    <Navbar/>
    </div>

    <div className='bg-zinc-800'>

    <div>
    <Filter
      filterData = {filterData}
      category = {category}
      setCategory = {setCategory}
    />
    </div>

    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[150vh'>
      {
        loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
      } 
    </div>
      
    </div>

   </div>
   </>
  );
}

export default App;
