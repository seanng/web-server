import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const A = styled.a`
  ${buttonStyles}
  width: ${props => props.wide && '100%'};
  background: ${props => props.bgColor};
`;

export default A;
