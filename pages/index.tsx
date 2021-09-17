import styled from "styled-components";

import { useId } from "@radix-ui/react-id";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  const id = useId();
  console.log(id)
  return <Title id={id}>My page</Title>;
}
