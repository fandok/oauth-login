import GoogleLogin from "@leecheuk/react-google-login";

const CLIENT_ID =
  "318773101220-0q7v3qrqhku0mg0g9t7ka0muf765j8c1.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
