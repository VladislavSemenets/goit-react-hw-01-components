import {Card, Img, List, Desc, Items, Span} from "./Profile.styled.js"


export const Profile = ({items}) => {
  return (
    <Card className="profile">
      {items.map((item, index) => (
        <div key={index} className="description">
          <Img
            src={item.avatar}
            alt="User avatar"
            className="avatar"
            width='80'
          />
          <Desc className="name">{item.username}</Desc>
          <Desc className="tag">@{item.tag}</Desc>
          <Desc className="location">{item.location}</Desc>

          <List className="stats">
            <Items>
              <Span className="label">Followers</Span>
              <div className="quantity-container">
    <Span className="quantity">{item.stats.followers}</Span>
  </div>
            </Items>
            <Items>
              <Span className="label">Views</Span>
              <div className="quantity-container">
              <Span className="quantity">{item.stats.views}</Span>
             </div>
            </Items>
            <Items>
              <Span className="label">Likes</Span>
              <div className="quantity-container">
              <Span className="quantity">{item.stats.likes}</Span>
            </div>
            </Items>
          </List>
        </div>
      ))}
    </Card>
  );
  }