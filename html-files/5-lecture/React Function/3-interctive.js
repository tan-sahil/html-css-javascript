// to make react interactive so component can inteact with its child..
// component and ref is required..
import { Component,useRef } from "react";
class summary extends Component {
    // construction is required as intake on submittion function is written here,
    constructor(props) {
        super(props),
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const[_title, _color] = this.refs;
        e.preventDefault()
        alert(`title is ${_title.value} and color is ${_color.value}`);
        _title.value =" ";
        _color.value = "#00000 ",
        _title.focus()


    }





    render(){
        return(
            <div className="summary">
                <form onSubmit={this.submit}>
                    <input ref = "_title"
                    type="text"
                    placeholder="Colr title" required
                    />
                    <input ref="_color"
                    type="text" required/>
                    <button>ADD</button>

                </form>
            </div>
        )
    }
    
}

/// using refs

class summary1 extends Component{
// constructor
constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
}
// submit function on event

submit(e) {
    const {_color, _title} = this.refs
    e.preventDefault()
    alert(``)
}


    render(){
        return(
            <form onSubmit={this.submit}></form>
        )
    }
}