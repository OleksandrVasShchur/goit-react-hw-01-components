import clsx from 'clsx';
import PropTypes from 'prop-types'
import css from './friendListItem.module.css';
function FriendListItem({
    avatar,
    name,
    isOnline,
}) {

    const active = isOnline;

    const classNames = clsx('status', active && 'statusOnline')


    return (
        <li className={css.item}>
            <span className={classNames} >{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )

}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem;
