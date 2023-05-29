import './index.css'

const Thumbnail = props => {
  const {newList, upadteItemID} = props
  const {id, thumbnailUrl, category} = newList
  const updateIMAGEid = () => {
    upadteItemID(id)
  }
  return (
    <li className="thumbnail-card">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={updateIMAGEid}
        value={category}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default Thumbnail
