import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdCamera } from "react-icons/io";

import Logo from "../components/Logo";

const CreateProfile = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const [location, setLocation] = useState("");

  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    selectedImage && location ? setNext(true) : setNext(false);
  }, [selectedImage, location]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(false);
    }
  };

  return (
    <div className="create-profile-page">
      <Logo />
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // all form handler's, queries, etc will be here

          navigate("/user-intent");
        }}
        className="create-profile-container"
      >
        <div className="heading">
          <h4>Welcome! Let's create your profile</h4>
          <p>Let others get to know better! You can do these later</p>
        </div>

        <div className="add-avatar-container">
          <span>Add an avatar</span>
          <label htmlFor="profile-input">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <IoMdCamera />
            )}
            <div>
              <span>Choose image</span>
              <li>Or choose one of our defaults</li>
            </div>
          </label>
          <input
            type="file"
            id="profile-input"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="add-location-container">
          <span>Add your location</span>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className={`submit-button ${next === true ? "" : "disable"}`}>
          Next
        </button>
        <span
          className="return-message"
          style={next ? { opacity: 1 } : { opacity: 0 }}
        >
          or Press RETURN
        </span>
      </form>
    </div>
  );
};

export default CreateProfile;
