import styled from "styled-components";
import LogoPng from "./Logo.png";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={LogoPng} alt="logo" />
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #3478fd;
`;
const Logo = styled.img`
  margin: 10px;
`;
