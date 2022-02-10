/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { NewRecord, Container, PageTitle } from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
//import axios from "axios";

export default function Records() {
  const [data, setData] = useState(undefined);
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentTime = dayjs().hour();
    if (currentTime > 0 && currentTime < 12) setTime("Bom dia, ");
    else if (currentTime > 12 && currentTime < 18) setTime("Boa tarde, ");
    else setTime("Boa noite, ");
  });

  return (
    <Container>
      <TitleWrapper>
        <PageTitle>{time}Cleane</PageTitle>
        <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
      </TitleWrapper>

      <WhiteBoard>
        {!data ? (
          <h3>Não há registros no período selecionado</h3>
        ) : (
          <BoardContent key="1" data={data.records} />
        )}
      </WhiteBoard>
      <DatesWrapper>
        <PageTitle>Período</PageTitle>
        <input type="date" placeholder="Início" />
        <input type="date" placeholder="Fim" />
      </DatesWrapper>
      <ButtonsWrapper>
        <NewRecord onClick={() => navigate("/newEntry")}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </NewRecord>
        <NewRecord onClick={() => navigate("/newWithdraw")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
        </NewRecord>
      </ButtonsWrapper>
    </Container>
  );
}

function BoardContent({ data }) {
  let sum = 0;
  data.map((info) => {
    sum += info.value;
  });
  return (
    <BoardWrapper>
      {data.map((info) => (
        <>
          <AllRecords key={info.id} info={info} />
        </>
      ))}
      <h2>SALDO</h2>
      <h4>{sum.toFixed(2)}</h4>
    </BoardWrapper>
  );
}

function AllRecords(props) {
  return (
    <List>
      <div>
        <Date>{props.info.date}</Date>
        <Title>{props.info.description}</Title>
      </div>

      <Value type={props.info.type}>{props.info.value.toFixed(2)}</Value>
    </List>
  );
}

const WhiteBoard = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  position: relative;

  h3 {
    font-size: 20px;
    width: 200px;
    color: #868686;
    margin: 50% auto;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 8px 0px;

  a {
    margin: 0px;
    width: 47%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  ion-icon {
    font-size: 30px;
    color: #8a9946;
  }
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 900;
    color: black;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  h4 {
    color: green;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const List = styled.div`
  padding: 5px;
  color: black;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

const Value = styled.p`
  margin: 8px;
  color: ${(props) => (props.type === "entry" ? "green" : "red")};
`;

const Date = styled.p`
  margin: 8px;
  color: #868686;
`;

const Title = styled.p`
  margin: 8px;
`;

const DatesWrapper = styled.div``;
