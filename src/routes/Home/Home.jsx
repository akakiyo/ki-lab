import styled from "styled-components";

const Home = () => {
  return (
    <>
      <List>
        <Card>
          <CardText>信号アップロード</CardText>
        </Card>
        <Card>
          <CardText>信号アップロード</CardText>
        </Card>
        <Card>
          <CardText>信号アップロード</CardText>
        </Card>
        <Card>
          <CardText>信号アップロード</CardText>
        </Card>
      </List>
    </>
  );
};

const CardText = styled.p`
  color: white;
  bottom: 0;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Card = styled.div`
  margin: 60px 60px;
  float: left;
  width: 584px;
  height: 297px;
  background-color: #3478fd;
`;
export default Home;
