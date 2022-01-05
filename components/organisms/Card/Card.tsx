import {
  BoldSpan,
  BoldSpanClicked,
  CardDiv,
  CardImage,
  Span,
  SpanEmail,
  StartSpan,
} from "./styles";

import React from "react";
import axios from "axios";

interface Person {
  name: string;
  surname: string;
  email: string;
  dob: string;
  profilePicture: string;
  theme: string;
  description: string;
}

// interface isClicked {
//   isClicked: boolean;
// }

export default function Card({ person }: { person: Person }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [userGreeting, setUserGreeting] = React.useState("");
  const greetUser = (personName: string) => {
    return axios
      .post("https://dummy-api.deta.dev/greeting", { name: personName })
      .then((res) => {
        setIsClicked((isClicked) => !isClicked);
        setUserGreeting(res.data);
        console.log(res.data);
        // TODO display the greeting from here  (resp.data)
      });
  };

  return (
    <>
      {isClicked ? (
        <CardDiv theme={person.theme} onClick={() => setIsClicked(false)}>
          <BoldSpanClicked isClicked={isClicked}>
            {userGreeting}
          </BoldSpanClicked>
        </CardDiv>
      ) : (
        <CardDiv theme={person.theme} onClick={() => greetUser(person.name)}>
          <CardImage src={person.profilePicture} alt="" />
          <BoldSpan isClicked={isClicked}>
            {person.name} {person.surname}
          </BoldSpan>
          <SpanEmail>{person.email}</SpanEmail>
          <Span>{person.description}</Span>
          <StartSpan>Bdate {person.dob}</StartSpan>
        </CardDiv>
      )}
    </>
  );
}
