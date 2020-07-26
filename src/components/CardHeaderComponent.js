import React, {Component} from "react";
import TextStyles from "../styles/typography"
import textStyles from "../styles/typography";

class CardHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{height: 49, display:"flex"}} >
                <span style={textStyles.largeBold}>{this.props.text}</span>
            </div>
        );
    }
}
export default CardHeader;


