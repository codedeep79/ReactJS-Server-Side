const React     = require("react");
var Note1 = React.createClass({
    save(){

    },
    cancel(){
        this.props.cancel;
    },
    del(){
        this.props.remove(this.props.index);
    },
    render(){
        return(
            <div>
                <input type="text" defaultValue={this.props.children} ref="txtEditCourse" placeholder="Enter Your Course..."/>
                <br/>
                <button onClick={this.save}>Save</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        );
    }
});

var Note2 = React.createClass({
    getInitialState(){
         return {isUpdate: false}
    },
    save(){
        this.props.save(this.props.index, this.refs.txtEditCourse.value);
        this.state.isUpdate = this.props.update(false);
        this.setState(this.state);
    },
    cancel(){
        this.state.isUpdate = this.props.update(false);
        this.setState(this.state);
    },
    update(){
        this.state.isUpdate = this.props.update(true);
        this.setState(this.state);
    },
    del(){
        this.props.remove(this.props.index);
    },
    render(){
        if (this.state.isUpdate){
            return(
                <div>
                    <input type="text" defaultValue={this.props.children} ref="txtEditCourse" placeholder="Enter Your Course..."/>
                    <br/>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <p>{this.props.children}</p>
                    <button onClick={this.del}>Delete</button>
                    <button onClick={this.update}>Update</button>
                </div>
            );
        }
        
    }
});

module.exports.Note1 = Note1;
module.exports.Note2 = Note2;