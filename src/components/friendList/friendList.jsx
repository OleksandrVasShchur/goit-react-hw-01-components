import FriendListItem from "components/FriendListItem/friendListItem";


function FriendList({friends}) {
    console.log(friends)
    
    return (

        <ul class="friend-list">
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
