var React = require('react');
var MapLocator = require('./MapLocator');

var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var FontIcon= mui.FontIcon;
var Dialog = mui.Dialog;

var MenuBar = React.createClass({
    handleTouchTap: function(){
      console.log("touch tap");
      this.refs.standardDialog.show();
    },
    handleSubmit: function(){
       this.refs.standardDialog.dismiss();
      console.log("submit called");
      this.props.showLoading();
    },
      handleCancel: function(){
        this.refs.standardDialog.dismiss();
      console.log("cancel called");
    },
    render: function(){
      /*  var standardActions = [
          { text: 'Cancel' },
          { text: 'Use this location', onTouchTap: this.handleSubmit, ref: 'submit' }
       ];*/
       var actions = [
           <MapLocator updateStreets={this.props.updateStreets} loadData={this.handleSubmit} handleCancel={this.handleCancel}/>
       ];

      	return (
          <div className='grid' id='menu'>
                <div className='unit'>
                   <FlatButton label="Choose a city" primary={true} onTouchTap={this.handleTouchTap} />
                 </div>

                <Dialog
                    ref="standardDialog"
                    actions={actions} 
                >
                </Dialog>
          </div>
        );
    }
});

module.exports = MenuBar;