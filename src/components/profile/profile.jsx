import PropTypes from 'prop-types';
import css from './profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div>
      <div className={css.profile}>
        <div class="description">
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}> {username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}> {location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.info}>
            <span class="label">Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.info}>
            <span class="label">Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.info}>
            <span class="label">Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
