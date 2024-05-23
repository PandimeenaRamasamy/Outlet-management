import React, { useState } from 'react'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import Footernav from '../Footer/Footerbar'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Outlet from '../Outletnavbar/Outlet'

import './Registration.css'
const Registration = () => {
  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantNumber2, setRestaurantNumber2] = useState("");

  const [whatsappNumber, setWhatsappNumber] = useState("");
  console.log(restaurantNumber2);
  const [isChecked, setIsChecked] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // If the checkbox is checked, copy the phone number from the restaurant number field to the WhatsApp number field
      setWhatsappNumber(restaurantNumber);
    } else {
      // If the checkbox is unchecked, clear the WhatsApp number field
      return <></>;
    }
  };

  const handleWhatsappNumberChange = (value) => {
    setWhatsappNumber(value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
  const handleButtonClick = () => {
    document.getElementById('hidden-file-input').click();
  };
  return (
    <div className='registarion'>
      <Sidenavbar />
      <Outlet />
      <div className="main-div">
        <div className="submain-div">
          <div className="heading">
            <h5>Registration</h5>
          </div>

          <div className="form-div">
            <form action="">
              <div className="labelinput-div">
                <label htmlFor="" className="label">
                  Restaurant name
                </label>
                <input type="text" className="inputbox" placeholder="Name" />
              </div>
              <div className="labelinput-div">
                <label htmlFor="" className="label">
                  Contact person name
                </label>
                <input type="text" className="inputbox" placeholder="Name" />
              </div>

              <div className="labelinput-div">
                <label htmlFor="" className="label">
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
              <div className="labelinput-div">
                <label htmlFor="" className="label">
                  Contact Person Email ID
                </label>
                <input type="email" className="inputbox" placeholder="xyz@gmail.com" />
              </div>

              <div className="labelinput-div">
                <label for="cars" className="label">Designation</label>
                <select name="desig" id="desig" className="inputbox">
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>

                </select>
              </div>
              <div className="labelinput-div">
                <label htmlFor="" className="label">
                  GST NUMBER
                </label>
                <input type="text" className="inputbox" placeholder="" />
              </div>
              <div className="labelinput-div ">
                <label htmlFor="" className="label">
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
                      <img src={imagePreview} alt="Preview" className="imgpreview" />
                             <p>Preview</p>
                    </div>
                    }
                   
                  </div>
                  {!file && <p className='fornoimg'>No image selected</p> }
                </div>
              </div>




            </form>
          </div>
        </div>
      </div>
      <Footernav />
    </div>
  )
}

export default Registration


// <<<<<<< HEAD
// =======
  
// >>>>>>> abcd494af9af931837926032ae68c569100470ca