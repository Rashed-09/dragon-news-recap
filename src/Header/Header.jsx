import newsLogo from "../assets/logo.png"
import moment from "moment";

const Header = () => {
    return (
      <div className="flex justify-center text-center">
        <div className="space-y-3">
          <img src={newsLogo} alt="News Logo" />
          <p>Journalism Without Fear or Favour</p>
          {moment().format("dddd, MMMM, D, YYYY")}
        </div>
      </div>
    );
};

export default Header;