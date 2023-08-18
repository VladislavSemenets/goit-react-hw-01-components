import styled, { css } from "styled-components";

export const List = styled.li`
  display: flex;
  align-items: center;
  row-gap: 15px;
  width: 300px;
  background-color: white;
  border: 1px solid black;
`;

export const Desc = styled.p`
  margin-left: 10px;
`;

export const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? "green" : "red")};
  margin-right: 5px;
`;

export const Items = styled.ul`
  display: flex;
  gap: 13px;
  flex-direction: column;
`;