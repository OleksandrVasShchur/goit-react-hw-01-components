import PropTypes from 'prop-types';


// const statisticData = data.map(value => value.JSON.parse() )


function Statistics({title, stats}) {
    console.log(stats)
console.log(title)

    return (
      <section class="statistics">
        {title && (<h2 class="title">{title}</h2>)}
        
        <ul class="stat-list">
        {stats.map(stat => (
        <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
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