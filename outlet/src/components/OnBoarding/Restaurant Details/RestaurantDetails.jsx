import React, { useState } from "react";
import "../Restaurant Details/RestaurantDetails.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RestaurantDetails = () => {
    const[form,setForm]=useState({
        BusinessLegalName:"",
        phoneType:"",
         email:"",
        website:"",
        InstagramLink:"",
        FacebookLink:""







    })

    console.log(form)
  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantNumber2, setRestaurantNumber2] = useState("");

  const [whatsappNumber, setWhatsappNumber] = useState("");
  console.log(restaurantNumber2);
  const [isChecked, setIsChecked] = useState(false);

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
  
 

  return (
    <div className="main-div">
      <div className="submain-div">
        <div className="heading">
          <h5>Restaurant Details</h5>
        </div>

        <div className="form-div">
          <form action="">
            <div className="labelinput-div">
              <label htmlFor="" className="label">
                Business Legal Name
              </label>
              <input type="text" className="inputbox" placeholder="Name" onChange={(e)=>{setForm({...form,"BusinessLegalName":e.target.value})}} />
            </div>

            <div className="labelinput-div">
              <label htmlFor="" className="label">
                Restaurant contact number
              </label>
              <div>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Mobile"
                    name="phoneType"
                    className="radio"
                    checked={form.phoneType === "Mobile"}
                    onChange={(e)=>setForm({...form,"phoneType":e.target.value})}
                  />
                  Mobile
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Landline"
                    name="phoneType"
                    className="radio"
                    checked={form.phoneType === "Landline"}
                    onChange={(e)=>setForm({...form,"phoneType":e.target.value})}

                  />
                  Landline
                </label>
              </div>
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
              <label
                htmlFor=""
                className="label"
                style={{ marginBottom: "15px" }}
              >
                What's App Number
              </label>
              <label className="radio-label">
                <input
                  type="checkbox"
                  value="option1"
                  name="phoneType"
                  className="radio"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Same as restaurant mobile no.
              </label>
              {isChecked ? (
                <input
                  type="text"
                  className="inputbox"
                  value={whatsappNumber}
                  onChange={(e) => handleWhatsappNumberChange(e.target.value)}
                  placeholder="Enter Whatsapp Number"
                />
              ) : (
                <PhoneInput
                  inputStyle={{ color: "green" }}
                  country={restaurantNumber2}
                  onChange={(value) => {
                    setRestaurantNumber2(value);
                  }}
                  placeholder="75744 3444"
                  countryCodeEditable={false}
                  onlyCountries={["in", "us"]}
                />
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }} className="personal-details">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="" className="label">
                  Email
                </label>
                <input type="email" className="inputbox2" placeholder="xyz@gmail.com" onChange={(e)=>{setForm({...form,"email":e.target.value})}}  />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}  className="personal-details">
                <label htmlFor="" className="label">
                  Website Link
                </label>
                <input type="url" className="inputbox2" placeholder="Magilhub.com"  onChange={(e)=>{setForm({...form,"website":e.target.value})}}/>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}  className="personal-details">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="" className="label">
                Instagram Link
                </label>
                <input type="url" className="inputbox2 " placeholder="Chandra.uiux" onChange={(e)=>{setForm({...form,"  InstagramLink":e.target.value})}} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="" className="label">
                Facebook Link                </label>
                <input type="url" className="inputbox2" placeholder="chandra.com"  onChange={(e)=>{setForm({...form,"FacebookLink":e.target.value})}}  />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
