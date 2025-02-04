import axios from "axios";
import { useEffect, useState } from "react";

const View = () => {

  const [data, setData] = useState({})

    const handleFetch = async () => {
        const {data} = await axios.get('http://localhost:3000/api/user/view')  
        setData(data) 
        console.log(data);
             
    }

    useEffect(() => {
      handleFetch()
    }, [])
    

  return (
    <div>
      <ul className="flex justify-evenly gap-y-6 flex-wrap mt-12">
        {data.data.map((item, index) => {
          return(
            <li key={index} className="w-[260px] border-4 border-black p-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO4kw4CJYq4u79F13XGgysu28MPNqUbPG8Q&s" alt="" />
              <div className="mt-4 flex flex-col items-center gap-4">
                <h1 className="text-2xl">{item.name}</h1>
                <p>{item.email}</p>
                <div className="flex justify-between w-full m-3">
                  <button className="border-4 border-gray-800 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white hover:cursor-pointer">Edit</button>
                  <button className="border-4 border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white hover:cursor-pointer">Delete</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default View;
