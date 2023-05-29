import './index.css'

const TabItem = props => {
  const {itemlist, updateTab, CheckDet} = props
  const {tabId, displayText} = itemlist
  const updatevale = () => {
    updateTab(tabId)
  }
  const colorDetails = CheckDet === tabId ? 'is-selected' : ''
  return (
    <li>
      <button
        type="button"
        className={`tabItemBtn ${colorDetails}`}
        onClick={updatevale}
        value={tabId}
      >
        {displayText}
      </button>
      {CheckDet === tabId && <hr />}
    </li>
  )
}

export default TabItem
