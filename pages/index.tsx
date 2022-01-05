import { Card } from "../components/organisms/Card";
import Head from "next/head";
import type { NextPage } from "next";
import React from "react";
import { Title } from "../components/atoms/Title";
import axios from "axios";
import styled from "styled-components";

interface Person {
  name: string;
  surname: string;
  email: string;
  dob: string;
  profilePicture: string;
  theme: string;
  description: string;
}

const Home: NextPage = () => {
  const [personData, setPersonData] = React.useState<Person[]>([]);

  React.useEffect(() => {
    axios.get("https://dummy-api.deta.dev/user").then((res) => {
      setPersonData(res.data), console.log(personData);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Container>
        {personData.map((person) => {
          return <Card key={person.name} person={person} />;
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

export default Home;
