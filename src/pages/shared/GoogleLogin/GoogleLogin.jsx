import google from "../../../assets/logos/google.svg";
const GoogleLogin = () => {
  return (
    <div>
      <div className="divider">Or</div>
      <button className="btn w-full  ">
        {" "}
        <img className="w-10" src={google} alt="" />
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
