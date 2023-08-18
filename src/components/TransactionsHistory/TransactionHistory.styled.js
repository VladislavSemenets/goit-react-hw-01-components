import styled from "styled-components";

export const Table = styled.table`
  width: 500px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4f7f8;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: ${props => props.color || "transparent"};
`;

export const VerticalLine = styled.td`
  width: 2px;
  background-color: #ddd;
`;