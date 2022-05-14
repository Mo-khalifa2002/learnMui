import styled from "styled-components";
import BasicSwitches from "../../Switch/BasicSwitches";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

function Themes(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  return (
    <Page>
      <Container>
        <BasicSwitches onClick={changeTheme} />
      </Container>
    </Page>
  );
}

export default Themes;
