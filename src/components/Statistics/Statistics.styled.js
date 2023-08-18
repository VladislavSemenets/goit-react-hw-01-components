import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Section = styled.section`
  display: inline-block;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  padding: 30px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Box = styled.div`
width: 100px;
border: 1px solid black;
`;