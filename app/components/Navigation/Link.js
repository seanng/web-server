import styled from 'styled-components';
import { Link } from 'react-router';

const styledLink = styled(Link)`
  color: ${props => props.theme.colors.navText};
  margin-left: 1em;

  &:hover {
    color: #6cc0e5;
  }
  &:focus {
    color: #6cc0e5;
  }
`;
export default styledLink;
