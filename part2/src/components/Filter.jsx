/* eslint-disable react/prop-types */
const Filter = ({ keyword, handleSearch }) => {
  return (
    <div>
      filter shown with<input
        value={keyword}
        onChange={handleSearch}/>
    </div>
  )
}

export default Filter;