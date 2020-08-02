import textStyles from "../styles/typography";
import Colors from "../styles/Color";
import React, {Component} from "react";
import Rating from "@material-ui/lab/Rating";

class RatingWithLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <span style={this.props.style}>
                   <span style={{marginTop: 3, marginRight: 5, ...textStyles.smallReg, color: Colors.darkGrey}}>{this.props.data.value}</span>
                   <Rating readOnly={true} value={this.props.data.value} precision={this.props.data.precision}></Rating>
            </span>
        )
    }
}

export default RatingWithLabel
