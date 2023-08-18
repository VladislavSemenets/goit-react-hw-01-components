import { Profile } from "./Profile/Profile";
import profileItems from "../user.json";
import { Statistics } from "./Statistics/Statistics";
import statisticsItems from "../data.json";
import { FriendList } from "./FriendList/FriendList";
import friendItems from "../friends.json";
import { TransactionHistory } from "./TransactionsHistory/TransactionHistory";
import transactions from "../transactions.json";
import { GlobalStyle } from "./GlobalStyled";


export const App = () => {
  return <div>
    <Profile items={profileItems}/>
    <Statistics items={statisticsItems}/>
    <FriendList items={friendItems}/>
    <TransactionHistory items={transactions}/>
 <GlobalStyle/>
 </div>
  };
