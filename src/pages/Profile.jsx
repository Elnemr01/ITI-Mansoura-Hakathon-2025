import React, { useContext, useEffect, useState } from "react";
import "./pageStyle/profilePage.css";
import { OurContext } from "../contextAPI/FilterName";
import { assets } from "./../assets/assets_frontend/assets";
import { toast, ToastContainer } from "react-toastify";
import Joi from "joi";
import { p } from "framer-motion/client";

const Profile = () => {
  let { login, setProfileImage } = useContext(OurContext);
  let [editable, setEditable] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("00000000000");
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("");
  let [birthday, setBirthday] = useState("");
  let [profileImage, setLocalProfileImage] = useState(assets.upload_area);
  let [newImage, setNewImage] = useState(null);
  let [errorMessages,setErrorMessages]=useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setEmail(user.email);
      setName(user.full_name);
      setPhone(user.phone || "000000000000");
      setAddress(user.address || "");
      setGender(user.gender || "");
      setBirthday(user.birthday || "");
      setLocalProfileImage(user.profileImage || assets.upload_area);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAfterEdit = () => {

    let result=formValidation();
    if(result.error) {
      setErrorMessages(getFormErrors(result.error.details))
      console.log(getFormErrors(result.error.details))
    }
    else {
      updateUserInfo();
    }
    
  };


  let updateUserInfo=()=> {
    setEditable((old)=> !old);
    setErrorMessages([])
    toast.success("Profile Updated");
    let user = JSON.parse(localStorage.getItem("currentUser"));

    // Update profile image if a new one was uploaded
    if (newImage) {
      setLocalProfileImage(newImage);
      setProfileImage(newImage); // Update the context
    }

    user = {
      ...user,
      full_name: name,
      gender,
      birthday,
      phone,
      address,
      profileImage: newImage || profileImage,
    };

    let allUsers = JSON.parse(localStorage.getItem("users"));
    allUsers = allUsers.map((e) => {
      if (e.password === user.password && e.email === user.email) {
        return user;
      } else {
        return e;
      }
    });
    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  let formValidation =()=> {
    let schema = Joi.object({
      name: Joi.string()
        .min(6)
        .required()
        .messages({
          "string.base": "Name must be a text",
          "string.empty": "Name is required",
          "string.min": "Name must be at least 6 characters",
          "any.required": "Name is required"
        }),

      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.base": "Email must be a text",
          "string.empty": "Email is required",
          "string.email": "Please enter a valid email",
          "any.required": "Email is required"
        }),

      phone: Joi.string()
        .length(11)
        .pattern(/^\d+$/)
        .required()
        .messages({
          "string.base": "Phone must be a a valid phone number",
          "string.empty": "Phone is required",
          "string.length": "Phone must be exactly 11 digits",
          "string.pattern.base": "Phone must contain only numbers",
          "any.required": "Phone is required"
        }),

      address: Joi.string().required()
        .messages({
          "string.base": "Address must be a text",
          "string.empty": "Address is required",
          "any.required": "Address is required"
    }),

    gender: Joi.string()
      .required()
      .messages({
        "string.empty": "Gender is required",
        "any.required": "Gender is required"
      }),

    birthday: Joi.string()
      .required()
      .messages({
        "string.base": "Birthday must be text",
        "string.empty": "Birthday is required",
        "any.required": "Birthday is required"
      }),

});



    return schema.validate({
      name,
      email,
      phone,
      address,
      gender,
      birthday
    }, { abortEarly: false })
  }

  let getFormErrors = (details) => {
  const errors = {};

  details.forEach(err => {
    const field = err.path?.[0];
    if (field && !errors[field]) {
      errors[field] = err.message.replace(/\"/g, "");
    }
  });

  return errors;
};

  if (!login) return null;
  return (
    <>
      <ToastContainer />
      <div className="profile">
        <div className="picture">
          {editable ? (
            <label htmlFor="profile-image-upload" style={{ cursor: "pointer" }}>
              <img
                src={newImage || profileImage}
                alt="profile"
                loading="lazy"
              />
              <input
                type="file"
                className="hidden"
                id="profile-image-upload"
                accept="image/*"
                onChange={(event) => handleImageUpload(event)}
              />
            </label>
          ) : (
            <img src={profileImage} alt="profile" loading="lazy" />
          )}
        </div>
        {/* user name */}
        <div className="name">
          {!editable ? (
            <h1>{name}</h1>
          ) : (
            <input
              type="text"
              value={name}
              onChange={(eve) => setName(eve.target.value)}
            />
          )}
        </div>
        {errorMessages['name']? <p className="nameError">{errorMessages['name']}</p> : ''}
        {/* contact info */}
        <div className="contactInfo infoTitle">
          <h2>contact information</h2>
          {/* email */}
          <div className="email data">
            <label htmlFor="email">email id:</label>
            {!editable ? (
              <p>{email}</p>
            ) : (
              <input
                type="email"
                value={email}
                id="email"
                onChange={(eve) => setEmail(eve.target.value)}
              />
            )}
          </div>
            {errorMessages['email']? <p className="error">{errorMessages['email']}</p> : ''}
          {/* phone */}
          <div className="phone data">
            <label htmlFor="phone">phone:</label>
            {!editable ? (
              <p>{phone}</p>
            ) : (
              <input
                type="text"
                value={phone ? phone: ''}
                id="phone"
                onChange={(eve) => setPhone(eve.target.value)}
              />
            )}
          </div>
          {errorMessages['phone']? <p className="error">{errorMessages['phone']}</p> : ''}
          {/* address */}
          <div className="address data">
            <label htmlFor="address">address:</label>
            {!editable ? (
              <p>{address}</p>
            ) : (
              <input
                type="text"
                value={address || ""}
                id="address"
                onChange={(eve) => setAddress(eve.target.value)}
              />
            )}
          </div>
          {errorMessages['address']? <p className="error">{errorMessages['address']}</p> : ''}
        </div>
        <div className="basicInfo infoTitle">
          <h2>basic information</h2>
          {/* gender */}
          <div className="gender data">
            <label htmlFor="gender">gender :</label>
            {!editable ? (
              <p>{gender}</p>
            ) : (
              <select
                name="gender"
                id="gender"
                onChange={(eve) => setGender(eve.target.value)}>
                <option value="noOption">No option</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            )}
          </div>
          {errorMessages['gender']? <p className="error">{errorMessages['gender']}</p> : ''}
          {/* birthday */}
          <div className="birthday data">
            <label htmlFor="birthday">birthday:</label>
            {!editable ? (
              <p>{birthday}</p>
            ) : (
              <input
                type="date"
                value={birthday}
                onChange={(eve) => setBirthday(eve.target.value)}
              />
            )}
          </div>
          {errorMessages['birthday']? <p className="error">{errorMessages['birthday']}</p> : ''}
        </div>
        {editable ? (
          <button onClick={() => handleAfterEdit()}>save information</button>
        ) : (
          <button onClick={() => setEditable((old)=> !old)}>edit</button>
        )}
      </div>
    </>
  );
};

export default Profile;