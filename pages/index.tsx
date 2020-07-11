import { styled } from "../css";

const Header = styled.h1({ bg: "blue-400" });
//const Header = styled.h1((css) => css.compose(css.bg("blue-400")));

export default function Home() {
  return <Header>Hello world</Header>;
}
