var React = require('react')

var style = {
  fontSize: '50vh',
  minHeight: '100%',
  height: '100%',
  textAlign: 'center',
}

module.exports = React.createClass({
  displayName: 'ClockApp',

  getInitialState: function() {
    return {
      time: '0:00'
    }
  },

  componentDidMount: function() {
    this.updateDate()
    setInterval(this.updateDate.bind(this), 1000)
  },

  updateDate: function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    this.setState({
      time: h + ':' + m
    })
  },

  render: function () {
    return (
      <div style={style}>
        {this.state.time}
      </div>
    )
  }
})
