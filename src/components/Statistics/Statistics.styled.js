import styled from 'styled-components';

export const StatisticsSection = styled.section`
  padding: 30px 0 30px;
`;
export const Title = styled.h2`
  font-size: 18px;
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor()};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
