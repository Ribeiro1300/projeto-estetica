import styled from "styled-components";
import Logo from "../assets/logo.png";

const mainColor = "#E5E5E5";
const secondColor = "#8A9946";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${mainColor};
  color: white;
  font-family: "Raleway", sans-serif;

  a {
    margin-top: 40px;
    color: currentColor;
    text-decoration: none;
  }
`;

export const MainTitle = styled.div`
  width: 300px;
  height: 100px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PageTitle = styled.h2`
  font-size: 30px;
  margin: 30px 0px;
  color: ${secondColor};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  font-family: "Raleway", sans-serif;
`;

export const Inputs = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
  height: 60px;
  border-radius: 5px;
  border: none;
  font-family: "Raleway", sans-serif;

  ::placeholder {
    padding: 10px;
    font-size: 20px;
  }
`;

export const Buttons = styled.button`
  height: 50px;
  background-color: ${secondColor};
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
`;

export const NewRecord = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${secondColor};
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  p {
    width: 100px;
    text-align: left;
  }

  ion-icon {
    font-size: 30px;
  }
`;
