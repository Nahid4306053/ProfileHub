import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function UserCard({ data }) {
  return (
    <div className="card   bg-base-200 shadow-lg">
      <figure className="relative h-48 flex bg-sky-100 justify-center items-center">
       <div style={{clipPath:"circle(44.6% at 81% 0)"}} className="path opacity-50 bg-sky-200 h-full w-full absolute" > </div>             
      <div className="avatar "> 
        <div className="w-28 bg-white ab h-28 rounded-full ring ring-sky-200 ring-offset-base-100 ring-offset-4">
          <img src={data.image} />
        </div>
      </div>
      </figure>
      <div className="card-body py-10 flex justify-center text-center">
        <h2 className="text-xl font-bold text-center hover:cursor-pointer hover:text-sky-500"><Link to={`/user-details/${data.id}`}>{data.firstName} {data.lastName}</Link></h2>
       <div className="details space-y-3 mt-5 font-medium">
       <p><i className="fa-regular fa-envelope"></i> {data.email}</p>
        <p><i className="fa-regular fa-location-dot"></i> {data.address?.address}, {data.address?.city}</p>
        <p><i className="fa-regular fa-briefcase"></i> {data.company?.name}, {data.company?.address?.city}</p>
       </div>
      </div>
    </div>
  );
}
