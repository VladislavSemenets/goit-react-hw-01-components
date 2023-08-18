import { Container, Section, List, ListItem, Title, Label, Percentage, Box } from "./Statistics.styled.js";

export const Statistics = ({items}) => {
  const colors = ["red", "blue", "green", "orange"]; // список різних кольорів

  return (
    <Container>
      <Section className="statistics">
        <List className="stat-list">
          <Title>UPLOAD STATS</Title>
          <ListItem className="item">
            {items.map((item, index) => (
              <Box key={item.id} style={{ backgroundColor: colors[index % colors.length] }}>
                <Label>{item.label}</Label>
                <div className="quantity-container">
                  <Percentage>{item.percentage}%</Percentage>
                </div>
              </Box>
            ))}
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}
