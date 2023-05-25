import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/friendListItem';
import css from './friendList.module.css';

function FriendList({ friends }) {
    
  return (
    <ul className={css.friendlist}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <li class="item" key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
friends: PropTypes.array
}
export default FriendList;
