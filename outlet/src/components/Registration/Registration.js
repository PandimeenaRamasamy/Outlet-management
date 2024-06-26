import React, { useState } from 'react'

import Footernav from '../Footer/Footerbar'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { ImCross, ImFontSize } from "react-icons/im";

import './Registration.css'
const Registration = () => {
  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantNumber2, setRestaurantNumber2] = useState("");
  console.log(restaurantNumber2);

  const [Registrationform, setRegistrationform] = useState({
    restaurantName: "",
    personName: "",
    email: "",
    Designation: "",
    GST: "",
   
  });


  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!validator.isEmail(email)) {
      return "Invalid email address";
    } else {
      return "";
    }
  };

  const validateName = (name) => {
    if (!name) {
      return "Name is required";
    } else if (!validator.isAlpha(name)) {
      return "Invalid name";
    } else {
      return "";
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValidationError = validateEmail(Registrationform.email);
    const nameValidationError=validateName(Registration.restaurantName)
    if (emailValidationError) {
      setEmailError(emailValidationError);
      setNameError(nameValidationError)
    } else {
      setEmailError("");
      setNameError("");
      alert(JSON.stringify(Registrationform, null, 2));
    }
  };

 console.log(nameError);
  

  console.log()


 
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
 

 
 

 

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const[imageclose,setimageclose]=useState(false)

  const handleButtonClick = () => {
    document.getElementById('hidden-file-input').click();
  
    setimageclose(false)
    
  };

  const closeModal=()=>
    {
    
      setimageclose(true)
      setFile(null)
    }



  return (
    <>
   


      <div className="main-divreg">
        <div className="submain-divreg">
          <div className="headingreg">
            <h5>Registration</h5>
          </div>

          <div className="form-divreg">
            <form onSubmit={handleSubmit}>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Restaurant name
                </label>
                <input type="text" className="inputbox" placeholder="Name"
                value={Registrationform.restaurantName}
                onChange={(e) =>
                  setRegistrationform({ ...Registrationform, restaurantName: e.target.value })
                }
                 />
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact person name
                </label>
                <input type="text" className={`inputbox ${nameError ? "inputbox-error" : ""}`} placeholder="Name" 
                value={Registrationform.personName}
                onChange={(e) =>{
                  setRegistrationform({ ...Registrationform, personName: e.target.value })
                  setNameError(validateName(e.target.value)); }
               
                }
                />
                {nameError && <div style={{ color: "red" }}>{nameError}</div>}
              </div>

              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  contact person number
                </label>

                <div style={{ marginTop: "20px" }}>
                  <PhoneInput
                    inputStyle={{ color: "green" }}
                    country={restaurantNumber}
                    onChange={(value) => {
                      setRestaurantNumber(value);
                    }}
                    placeholder="75744 3444"
                    countryCodeEditable={false}
                    onlyCountries={["in", "us"]}
                  />
                </div>
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact Person Email ID
                </label>
                <input type="email"  className={`inputbox ${emailError ? "inputbox-error" : ""}`}  placeholder="xyz@gmail.com"
                value={Registrationform.email}
                onChange={(e) =>{
                  setRegistrationform({ ...Registrationform, email: e.target.value })
                  setEmailError(validateEmail(e.target.value)); }
                } />
                  {emailError && <div style={{ color: "red" }}>{emailError}</div>}
              </div>

              <div className="labelinput-divreg">
                <label for="cars" className="labelreg">Designation</label>
                <select name="desig" id="desig" className="inputbox" value={Registrationform.Designation}
                onChange={(e) =>
                  setRegistrationform({ ...Registrationform, Designation: e.target.value })
                }>
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>

                </select>
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  GST NUMBER
                </label>
                <input type="text" className="inputbox" placeholder="" value={Registrationform.GST}
                onChange={(e) =>
                  setRegistrationform({ ...Registrationform, GST: e.target.value })
                }/>
              </div>
              <div className="labelinput-divreg ">
                <label htmlFor="" className="labelreg">
                  Restaurant logo
                </label>
               
                <div className="logo">
                  <input type="file" id="hidden-file-input" onChange={handleImage} placeholder="" style={{ display: 'none' }} />
                  <span>Drag & Drop to upload or </span>

                  <button type="button" className="custom-file-button custom-file-input" onClick={handleButtonClick}>Browse</button>
                  {/* <span className="custom-file-name">{file}</span> */}
                  <div className='preview'>
                    {file && 
                    <div>
                    {
                      imageclose ? <p style={{marginLeft:'-5%',color:'#67833E',fontSize: '12px'}}>No image selected</p>:
                      <>
                   <button onClick={closeModal} className='imcrosssty'><ImCross style={{ fontSize: '10px', color: 'white' }} /></button>
                      <img src={imagePreview} alt="Preview" className="imgpreview" />
                      <p>Preview</p></>
                    } 
                      
                    </div>
                    }
                   
                  </div>
                  {!file &&  <p className='fornoimg'>No image selected</p> }
                 
                </div>
              </div>




            </form>
          </div>
        </div>
      </div>
      <Footernav /></>
      
   
  )
}

export default Registration


// <<<<<<< HEAD
// =======
  
// >>>>>>> abcd494af9af931837926032ae68c569100470ca