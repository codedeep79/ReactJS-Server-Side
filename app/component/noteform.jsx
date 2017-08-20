const React     = require("react");
var NoteForm = React.createClass({
    add(){
        var value = this.refs.txtCourse.value;
        this.refs.txtCourse.value = '';
        this.props.addNote(value);
    },
    render(){
        return (
            <div>
                <input type="text" ref="txtCourse" placeholder="Enter Your Course..."/>
                <button onClick={this.add}>Add Course Continue</button>
            </div>
        );
    }
});

module.exports = NoteForm;