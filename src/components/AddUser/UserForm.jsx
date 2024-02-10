/* eslint-disable no-unused-vars */
import { useRef } from "react";
import TextFiled from "../shared/TextFiled";


export default function UserForm() {   
  const formref = useRef();
  const handelUserData = (form) =>{
   form.preventDefault();

   const err = [];
   const formData = {};
   formData.firstName = form.target.firstName.value.trim();
   formData.lastName = form.target.lastName.value.trim();
   formData.email = form.target.email.value.trim();
   formData.image = form.target.image.value.trim();
   formData.company = {};
   formData.address = {};
   formData.company.name = form.target.company.value.trim();
   formData.address.address = form.target.address.value.trim();

  const {company:{name},address:{address},...rest} = formData; 
  if(name === "" || address === ""){
    alert('All filed are Required');
    err.push("All filed Are Required")
  }
   Object.values(rest).map(ele=>{
    if(ele === ""){
      alert("All filed Are Required")
      err.push("All filed Are Required")
    }
   })

   if(err.length === 0){
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(alert("User Add Successfully"),formref.current.reset()).catch((err)=>alert("user add Oparetion failed"))
   }
  }

 
  return (
    <div className="">
    <h1 className="text-4xl font-strike mb-5">Add New User</h1>  
    <form ref={formref} onSubmit={handelUserData} className="space-y-8">
     <TextFiled type={'text'} label={'First Name'} name="firstName" placeholder={'Type your First Name'}></TextFiled>   
     <TextFiled type={'text'} label={'Last Name'} name="lastName" placeholder={'Type your Last Name'}></TextFiled>
     <TextFiled type={'email'} label={'Email'} name="email" placeholder={'Type your email'}></TextFiled>
     <TextFiled type={'text'} label={'Avatar'} name="image" placeholder={'Avatar Photo url'}></TextFiled>
     <TextFiled type={'text'} label={'Company Name'} name="company" min={1} placeholder={'Type your age'}></TextFiled>
     <TextFiled type={'text'} label={'Address'} name="address" min={1} placeholder={'Type your Address'}></TextFiled>
     <button className="btn btn-info w-full text-white text-lg" type="submit">Submit</button>
     </form>              
    </div>
  )
}
