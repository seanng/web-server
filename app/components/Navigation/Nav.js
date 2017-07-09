import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  z-index: 100;
  height: 6em;
`;
export default Nav;
