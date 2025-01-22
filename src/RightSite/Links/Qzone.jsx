import swim from "../../assets/swimming.png"
import classes from "../../assets/class.png"
import playGround from "../../assets/playground.png"
const Qzone = () => {
    return (
      <div className="bg-blue-100 px-3 py-2 rounded">
        <h2 className="text-xl font-medium text-black">Q Zone</h2>
        <div className="flex flex-col justify-center space-y-3">
          <img src={swim} alt="" />
          <img src={classes} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>
    );
};

export default Qzone;