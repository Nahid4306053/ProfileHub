/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UserForm from "../AddUser/UserForm";

export default function UserList() {
  const [loading, setloding] = useState(false);
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchkeyword,setSearchKeyword] = useState('')
  const [sortkeyword,setSortKeyword] = useState('')
  useEffect(() => {
    setloding(true);
    fetch("https://dummyjson.com/users") .then((res) => res.json()) .then( (data) => ( setData(data.users), setDisplayData(data.users), setloding(false) ) ) .catch(setloding(false));
  }, []);


  useEffect(()=>{
    const searchtime = setTimeout(() => {
       if(searchkeyword.trim() === ''){
          if(data.length > 0){
            setDisplayData(data);
           
          }
       } 
       else{ 
        setSortKeyword('')
         fetch(`https://dummyjson.com/users/search?q=${searchkeyword.trim()}`).then(res => res.json()).then(data=>setDisplayData(data.users));           
       }            
    }, 500);

    return ()=> clearInterval(searchtime);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchkeyword])  

  const HandelSort = (key) =>{
    if(sortkeyword.trim() === ''){
      if(data.length > 0){
        setDisplayData(data)
      }
   } 
   else{
       if(key === "company"){
         setDisplayData(displayData.sort((a,b)=> a[key].name.localeCompare(b[key].name)))    
       }
       else{
        displayData.sort((a,b)=> a[key].localeCompare(b[key]))
       }  
   }
  }


  return (
    <div className="full-body my-20">
      <div className="search-area flex flex-col items-center gap-7 container mx-auto">
        <h1 className="text-5xl text-center font-strike">Search User</h1>
        <div className="join">
          <div>
            <div>  
              <input type="text" value={searchkeyword} onChange={(e)=>setSearchKeyword(e.target.value)} placeholder="Search user By Name" className="input join-item input-bordered  lg:w-[350px]" />
            </div>
          </div>
          <select value={sortkeyword} onChange={(e)=>(HandelSort(e.target.value),setSortKeyword(e.target.value))} className="select join-item text-base  text-gray-500 select-bordered w-full max-w-xs">
         <option value={''}>Sort User</option>
         <option value={`firstName`}>Sort By Name</option>
         <option value={`email`}>Sort By Email</option>
         <option value={`company`}>Sort By Company Name</option>
         
       </select>
        </div>
      
        <div className="flex">

        </div>
      </div>

      <>
        <div className="container mx-auto">
          {loading ? (
            <div className="text-center my-20"><span className="loading loading-spinner loading-lg"></span></div>
          ) : (
            <div className="grid my-20 md:gap-16 lg:gap-5 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex justify-end col-span-full mb-10 lg:mb-0"> <button className="btn btn-info text-white " onClick={()=>document.getElementById('my_modal_3').showModal()}>Add New User</button></div>
             {displayData.length > 0 ?
             displayData.map(ele=>{
                    return <UserCard data={ele} key={ele.id}></UserCard>
             })
             : <div className="text-4xl py-20 font-strike text-center col-span-3 text-red-400"><p>No Data Found</p></div>
             }       
            </div>
          )}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
           
          <dialog id="my_modal_3" className="modal">
           <div className="modal-box w-11/12 max-w-5xl">
             <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
             </form>
             <UserForm></UserForm>
           </div>
         </dialog>
        </div>
      </>
    </div>
  );
}
