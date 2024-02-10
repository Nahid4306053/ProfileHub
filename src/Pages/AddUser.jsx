import UserForm from "../components/AddUser/UserForm";
import PageBanner from "../components/shared/PageBanner";


export default function AddUser() {
  return (
    <>
          <PageBanner description={ "Discover and showcase your online identity. Connect, share, and thrive in the digital realm." } title={"Add New User"} bgimg={"https://i.ibb.co/hB1XkNP/community.png"} ></PageBanner>

          <div className="container mx-auto">
          <div className="flex gap-20 my-20">
           <div className="lg:w-4/6 w-full">
            <UserForm></UserForm>         
           </div>
           <div className="lg:w-2/6 w-full">
           <img src="https://i.ibb.co/hVLxxb9/add.png" alt="" /> 
           <br />        
           <br />        
           <img src="https://househunterv2.netlify.app/images/ad_banner.png" alt="" />       
           </div>
          </div>
          </div>
    </>
  )
}
