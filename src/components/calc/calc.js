import Container from "../container/container";
import Card from "../card/card";
import Header from "../header/header";
import Result from "../result/result";

const Calc = (props) => {
  return (
    <Container>
      <Header />
      <Result />
      <Card></Card>
    </Container>
  );
};

export default Calc;
