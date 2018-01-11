import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

class SearchBar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = { searchText: '' }
  }

  onChange (e) {
    this.setState({ searchText: e.target.value })
    this.props.searchAction(e.target.value)
  }

  render () {
    return (
      <div style={{ width: '100%' }}>
        <Input placeholder="搜尋" type="text" value={this.state.searchText} onChange={this.onChange}/>
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchAction: PropTypes.func.isRequired
}

export default SearchBar
