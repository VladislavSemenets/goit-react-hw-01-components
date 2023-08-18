import { List, Desc, Span, Items } from "./FriendList.styled";

export const FriendList = ({ items }) => {
  return (
    <Items className="friend-list">
      {items.map(item => (
        <List key={item.id} isOnline={item.isOnline}>
          <Span className="isOnline">{item.isOnline}</Span>
          <img src={item.avatar} alt="User avatar" className="avatar" width="100" />
          <Desc className="name">{item.name}</Desc>
        </List>
      ))}
    </Items>
  );
};