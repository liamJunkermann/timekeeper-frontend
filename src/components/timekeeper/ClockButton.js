import React from 'react';

function adjust(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

class ClockButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mouseHover: false,
            buttonColor: props.baseColor
        }
    }
    buttonColor = () => {
        if(this.state.mouseHover){
            return(adjust(this.props.baseColor, -20));
        } else return this.props.baseColor;
    }
    render() {
        const { name } = this.props;
        const buttonColor = this.buttonColor();
        return (
            <div style={{ background: buttonColor, borderRadius: "15px", paddingTop: "1rem", paddingBottom: "1rem", textAlign: "center" }}
                onMouseEnter={() => this.setState({ mouseHover: true })} onMouseLeave={() => this.setState({ mouseHover: false })}>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default ClockButton;