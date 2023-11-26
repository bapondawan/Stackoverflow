import React from 'react';
import ReactDOM from 'react-dom';

export const TestBar = () => {
    setInterval(()=>{
        const element = new Date().toLocaleTimeString();
        ReactDOM.render(element,document.querySelector("#para"));
    },1000)

    return (
        <div>
            <p id='para'></p>
            <p id='para2'></p>
            <TestClass local="bn-BD"/>
        </div>
    );
};
export class TestClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    componentDidMount(){
        this.clocktime = setInterval(()=>this.tick());
    }
    componentWillUnmount(){
        clearInterval(this.clocktime);
    }
    tick(){
        this.setState({date:new Date()});
    }
    render(){
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString(this.props.local)}</p>
            </div>

        )
    }
}