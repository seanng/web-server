import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  height: ${ props => props.height };
`

export default SectionWrapper;
