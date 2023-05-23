import PropTypes from 'prop-types';
import css from './statistics.module.css';


// const statisticData = data.map(value => value.JSON.parse() )


function Statistics({title, stats}) {
    console.log(stats)


    return (
      <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        
        <ul className={css.statlist}>
        {stats.map(stat => (
        <li className={css.item} key={stat.id}>
            <span class="label">{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
      ))}
          
        </ul>
      </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }))
}


export default Statistics;