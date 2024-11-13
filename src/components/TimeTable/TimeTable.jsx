import PropTypes from 'prop-types';


const TimeTable = ({readTime}) => {

  return (
      <>
          <div className='px-[21px] py-[50px] text-blue-500 bg-slate-200 rounded-xl mb-3 text-2xl font-bold text-center '>Spent time on read : {readTime} min</div>
      
      
      </>
  )
}

TimeTable.propTypes = {
    readTime: PropTypes.number.isRequired,
}

export default TimeTable