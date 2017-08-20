const React     = require("react");
const Note      = require("./note.jsx");
const NoteForm  = require("./noteform.jsx");

var List = React.createClass({
    update(isUpdate){
        return isUpdate;
    },
    save(index, courseName){
        //var programming = ["Android", "IOS", "Windows Phone", "PHP"];
        //programming[id] = course;
        this.state.course.splice(index, 1, courseName);
        this.setState(this.state);
    },
    cancel(isUpdate){
        return isUpdate;
    },
    add(txtCourse){
        this.state.course.push(txtCourse);
        this.setState(this.state);
    },
    del(index){
        this.state.course.splice(index, 1);
        this.setState(this.state);
    },
    getInitialState(){
        return {course: ["Android","Windows Phone","IOS","PHP","ASP.NET"], isUpdate: false, getCourse: "Android"}
    },
    render(){
            return(
                <div>
                    <NoteForm addNote={this.add}/>
                    {
                        this.state.course.map((e, i) => {
                        return <Note.Note2 key={i} remove={this.del} 
                            save={this.save} update={this.update} index={i} course={e}>{e}</Note.Note2>
                        })
                    }
                </div>
            );      
    }
});

module.exports = List;