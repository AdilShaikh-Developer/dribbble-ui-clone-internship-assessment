import { useNavigate } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";

import Logo from "../components/Logo";
import SelectableCards from "../components/SelectableCards";

import FirstVectorArt from "../assets/Minimalist Vector Art - I.jpg";
import SecondVectorArt from "../assets/Minimalist Vector Art - II.jpg";
import ThirdVectorArt from "../assets/Minimalist Vector Art - III.jpg";

const UserIntent = () => {
  const navigate = useNavigate();
  return (
    <div className="user-intent-page">
      <Logo />
      <div className="user-intent-container">
        <button
          className="back-button"
          onClick={() => navigate("/create-profile")}
        >
          <FaAngleLeft />
        </button>
        <div className="heading">
          <h4>What brings you to Dribbble?</h4>
          <p>
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>

        <div className="intent-cards-container">
          <SelectableCards
            Image={FirstVectorArt}
            Title={"I'm a designer looking to share my work"}
          />
          <SelectableCards
            Image={SecondVectorArt}
            Title={"I'm looking to hire a designer"}
          />
          <SelectableCards
            Image={ThirdVectorArt}
            Title={"I'm looking for design inspiration"}
          />
        </div>

        <span>Anyting else? You can select multiple</span>

        <button
          className="submit-button "
          onClick={() => navigate("/email-verification")}
        >
          Finish
        </button>
        <span className="return-message">or Press RETURN</span>
      </div>
    </div>
  );
};

export default UserIntent;
