import FriendListItem from "components/FriendListItem/friendListItem";
import css from './friendList.module.css';
function FriendList({friends}) {
    console.log(friends)
    
    return (

        <ul className={css.friendlist}>
            {friends.map(friend => (
             <li class="item" key={friend.id} >
                <FriendListItem
                 avatar={friend.avatar}
                 name={friend.name}
                 isOnline={friend.isOnline}
                />
             </li>
            ))}

        </ul>  
          )
            
}
export default FriendList;
