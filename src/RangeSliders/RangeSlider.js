import React from 'react'
import {
    PriceSlider,
    InputSlider,
    Container,
    Fullrange,
    Movingrange,
} from './RangeSlider.style'

class RangeSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            value1: 0,
            value2: 100
        }
    }

    componentDidMount(){
        var slider = document.getElementById("myRange");  
        slider.oninput = function() {
            let setPercentage = this.value / 100;
            let fullRange = document.getElementsByClassName('fullrange')
            let movingrange = document.getElementsByClassName('movingrange')
            movingrange[0].style.width = `${fullRange[0].offsetWidth * setPercentage}px` 
        }
    }

    handleChange1= (event)=> {
        this.setState({value1: event.target.value});
        const el = document.getElementById("myinput2")
        el.style.background = `linear-gradient(to right, #C3C3C3 ${this.state.value1}%, #0070cd ${this.state.value1}%,#0070cd ${this.state.value2}%,#C3C3C3 ${this.state.value2}%)`
    }
    handleChange2= (event)=> {
        this.setState({value2: event.target.value});
        const el = document.getElementById("myinput2")
        el.style.background = `linear-gradient(to right, #C3C3C3 ${this.state.value1}%, #0070cd ${this.state.value1}%,#0070cd ${this.state.value2}%,#C3C3C3 ${this.state.value2}%)`
    }
    render(){
        return(
            <div>
            <PriceSlider>
                <InputSlider value={this.state.value1} onChange={this.handleChange1} id="myinput1" min="0" max="100" step="1" type="range"/>
                <InputSlider value={this.state.value2} onChange={this.handleChange2} id="myinput2" min="0" max="100" step="1" type="range"/>
            </PriceSlider>
            <div >
            <Container>
                <Fullrange className='fullrange'>
                    <Movingrange className='movingrange'>
                    </Movingrange>  
                </Fullrange>
            </Container>
            <br/>
            <input type='range' min="1" max="100"  className="slider" id="myRange"></input>
        </div>
        </div>
        )
    }
}
export default RangeSlider