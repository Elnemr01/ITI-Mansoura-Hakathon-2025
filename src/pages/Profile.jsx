import React, { useContext, useEffect, useState } from 'react'
import './pageStyle/profilePage.css'
import { OurContext } from '../contextAPI/FilterName';
import { assets } from './../assets/assets_frontend/assets';
import { toast } from 'react-toastify';

const Profile = ({ userData }) => {
    let { login, setProfileImage } = useContext(OurContext);
    let [editable, setEditable] = useState(false);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('00000000000');
    let [address, setAddress] = useState('');
    let [gender, setGender] = useState('');
    let [birthday, setBirthday] = useState('');
    let [profileImage, setLocalProfileImage] = useState(assets.upload_area);
    let [newImage, setNewImage] = useState(null);

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if(user) {
            setEmail(user.email);
            setName(user.full_name);
            setPhone(user.phone || '000000000000');
            setAddress(user.address || '');
            setGender(user.gender || '');
            setBirthday(user.birthday || '');
            setLocalProfileImage(user.profileImage || assets.upload_area);
        }
    },[]);

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
        setEditable(!editable);
        toast.success("Profile Updated");
        let user = JSON.parse(localStorage.getItem('currentUser'));
        
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
            profileImage: newImage || profileImage
        }

        let allUsers = JSON.parse(localStorage.getItem('users'));
        allUsers = allUsers.map((e) => {
            if (e.password === user.password && e.email === user.email) {
                return user;
            } else {
                return e;
            }
        });
        localStorage.setItem('users', JSON.stringify(allUsers));
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    if (!login) return null;
    return (
        <div className="profile">
            <div className="picture">
                { editable ? (
                    <label htmlFor="profile-image-upload" style={{ cursor: 'pointer' }}>
                        <img src={newImage || profileImage} alt="profile" loading='lazy'/>
                        <input type="file" className='hidden' id="profile-image-upload" accept="image/*" onChange={(event)=> handleImageUpload(event)} />
                    </label>
                ) :
                    <img src={profileImage} alt="profile" loading='lazy' />
                }
            </div>
            {/* user name */}
            <div className="name">
                {
                    !editable ? <h1>{name}</h1> :
                        <input type="text" value={name} onChange={(eve) => setName(eve.target.value)} />
                }
            </div>
            {/* contact info */}
            <div className="contactInfo infoTitle">
                <h2>contact information</h2>
                {/* email */}
                <div className="email data">
                    <label htmlFor="email">email id:</label>
                    <p>{email}</p>
                </div>
                {/* phone */}
                <div className="phone data">
                    <label htmlFor="phone">phone:</label>
                    {
                        !editable ? <p>{phone}</p> :
                            <input type="number" value={phone ? phone : '0000000000'} id='phone' onChange={(eve) => setPhone(eve.target.value)} />
                    }
                </div>
                {/* address */}
                <div className="address data">
                    <label htmlFor="address">address:</label>
                    {
                        !editable ? <p>{address}</p> :
                            <input type="text" value={address || ''} id='address' onChange={(eve) => setAddress(eve.target.value)} />
                    }
                </div>
            </div>
            <div className="basicInfo infoTitle">
                <h2>basic information</h2>
                {/* gender */}
                <div className="gender data">
                    <label htmlFor="gender">gender :</label>
                    {
                        !editable ? <p>{gender}</p> :
                            <select name="gender" id="gender" onChange={(eve) => setGender(eve.target.value)}>
                                <option value="noOption">No option</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                    }
                </div>
                {/* birthday */}
                <div className="birthday data">
                    <label htmlFor="birthday">birthday:</label>
                    {
                        !editable ? <p>{birthday}</p> :
                            <input type='date' value={birthday} onChange={(eve) => setBirthday(eve.target.value)} />
                    }
                </div>
            </div>
            {editable ? <button onClick={() => handleAfterEdit()}>save information</button>
                : <button onClick={() => setEditable(!editable)}>edit</button>}
        </div>
    )
}

export default Profile
