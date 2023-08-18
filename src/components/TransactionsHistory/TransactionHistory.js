import { Table,TableCell,VerticalLine,TableRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Table className="transaction-history">
        <thead>
          <TableRow>
            <TableCell color="#008080">Type</TableCell>
            <VerticalLine />
            <TableCell color="#008080">Amount</TableCell>
            <VerticalLine />
            <TableCell color="#008080">Currency</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <VerticalLine />
              <TableCell>{item.amount}</TableCell>
              <VerticalLine />
              <TableCell>{item.currency}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};