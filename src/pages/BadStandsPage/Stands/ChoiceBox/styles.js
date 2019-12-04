import styled from 'styled-components';

export const ChoiceBorder = styled.div`
  border: 1px solid #282c34;
  margin: 0 10px 10px 0;
  padding: 4px;
`;

export const BoxChoice = styled.div`
  display: table;
  padding: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;

  &:last-of-type {
    margin-right: 0px;
  }
`;
