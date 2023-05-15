import React from 'react'


const Filter = (props) => {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  const filterHandler = (title) => {
      setCategory(title);
  }

  return (
    <div className='w-11/12 flex justify-center flex-wrap space-x-4 mx-auto py-4'>
       {
        filterData.map(  (data) => {
        return (
          <button
           key = {data.id} 
          onClick={() => filterHandler(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white
          bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
          ${category === data.title ? 
          "bg-opacity-60 border-white" :
          "bg-opacity-40 border-transparent"}
          `}
          > {data.title}  </button>
          )
       })
       }
    </div>
  )
}

export default Filter