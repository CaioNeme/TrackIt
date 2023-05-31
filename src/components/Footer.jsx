import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


export default function Footer() {
  return (
    <>
      <Shadow />
      <Foot>
        <Link to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <Link to="/hoje">
          <CircularProgressbar
            className="circularProgessBar"
            value={66}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#FFF",
              pathColor: "#FFF",
              trailColor: "transparent"
            })}
          />
        </Link>
        <Link to={"/historico"}>
          <p>Histórico</p>
        </Link>
      </Foot >
    </>
  );
}

const Shadow = styled.div`
  width: 375px;
  height: 70px;
`;

const Foot = styled.div`
  position:fixed;
  bottom:0px;
  left:0px;

  width: 375px;
  height: 70px;

  background-color: #FFFFFF;

  display:flex;
  justify-content:space-around;
  align-items:center;

  .circularProgessBar {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom:40px;
    width: 91px;
  }

  p{
    width: 68px;
    height: 22px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
  }

`;