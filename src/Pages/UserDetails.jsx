/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import PageBanner from "../components/shared/PageBanner";
import { useEffect, useState } from "react";
import Map from "../components/UserDetails/Map";

export default function UserDetails() {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0,0)
    setloading(true);
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then(data=> (setData(data),setloading(false)));
  }, []);
  return (
    <>
      <PageBanner description={ "Discover and showcase your online identity. Connect, share, and thrive in the digital realm." } title={"User Digital Profile"} bgimg={"https://i.ibb.co/hB1XkNP/community.png"} ></PageBanner>
      <div className="container mx-auto my-28">
        {loading ?  <div className="text-center my-20"><span className="loading loading-spinner loading-lg"></span></div> :
         data && 
         <div className="lg:flex gap-20">
         <div className="lg:w-4/6 w-full">
          <div className="user_main_info flex gap-5 items-center border-b-2 pb-7">
          <div className="avatar "> 
           <div className=" bg-white w-20 h-20 md:w-28 md:h-28 rounded-full ring ring-sky-200 ring-offset-base-100 ring-offset-4">
             <img src={data.image} />
           </div>
          </div>
          <div className="info space-y-2">
            <h2 className="md:text-3xl text-2xl">{data.firstName} {data.lastName}</h2>
            <h4 className="md:text-xl text-lg opacity-75">{data.email}</h4>
          </div>

          </div>
          <div className="otherinfo grid grid-cols-1 md:grid-cols-2  gap-10 text-sm xl:text-xl lg:text-sm md:text-md text-slate-500 mt-10">
           <div className="item "><div><i className="fa-regular fa-briefcase"></i></div><strong>Company:</strong>{data.company?.name}</div> 
           <div className="item "><div><i className="fa-regular fa-briefcase"></i></div><strong>Department:</strong>{data.company?.department}</div> 
           <div className="item "><div><i className="fa-regular fa-briefcase"></i></div><strong>Title:</strong>{data.company?.title}</div>
           <div className="item "><div><i className="fa-regular fa-graduation-cap"></i></div><strong>University:</strong>{data.university}</div>
           <div className="item "><div><i className="fa-regular fa-calendar-days"></i></div><strong>BirthDate:</strong>{data.birthDate}</div>
           <div className="item "><div><i className="fa-regular fa-phone"></i></div><strong>Phone:</strong>{data.phone}</div>
           <div className="item "><div><i className="fa-solid fa-user"></i></div><strong>Gender:</strong>{data.gender}</div>
          </div>
         </div>
         <div className="lg:w-2/6 w-full mt-14 lg:mt-0"> <h1 className="text-2xl my-5 font-strike">User Address</h1> <Map lat={data.address?.coordinates?.lat} lng={data.address?.coordinates?.lng} address={data.address.address+", "+data.address.city}></Map></div>
       </div>
         
         }            
        
      </div>
    </>
  );
}
