import fb from "../../assets/fb.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-medium">Find Us</h2>
      <div className="mt-3">
        <button className="w-full border flex items-center justify-center py-2 gap-3 rounded-t">
            <img src={fb} alt="" />
          Login With Google
        </button>
        <button className="w-full border-x flex items-center justify-center py-4 gap-3">
            <img src={twitter} alt="" />
          Login With Github
        </button>
        <button className="w-full border flex items-center justify-center py-4 gap-3 rounded-b">
            <img src={instagram} alt="" />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default FindUs;
