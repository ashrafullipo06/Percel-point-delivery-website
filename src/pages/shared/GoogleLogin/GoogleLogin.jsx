import google from "../../../assets/logos/google.svg";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        imgDisplayUrl: result.user.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        // console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider">Or</div>
      <button onClick={handleGoogleLogin} className="btn w-full  ">
        <img className="w-10" src={google} alt="" />
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
