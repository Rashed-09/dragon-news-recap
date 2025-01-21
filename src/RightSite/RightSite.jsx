import FindUs from "./Links/FindUs";
import Login from "./Links/Login";
import Qzone from "./Links/Qzone";

const RightSite = () => {
    return (
        <div className="py-4 px-3 border space-y-3">
            <Login></Login>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightSite;