

import FriendList from "./friendList/friendList";
import TransactionHistory from "./transactions/transactionsHistory";
import Profile from "./profile/profile";
import Statistics from "./statistics/statistics";

import user from 'data/user';
import data from 'data/statistics';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />


<FriendList friends={friends} />


<TransactionHistory items={transactions}/>


    </div>
  );
};
