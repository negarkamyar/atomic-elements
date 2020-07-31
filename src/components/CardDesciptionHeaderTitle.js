import React, {Component} from "react";
import textStyles from "../styles/typography";

class CardDescriptionHeaderTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItem: "start", ...this.props.style
            }} >
                <span style={ textStyles.largeBold}>
                    {this.props.title}
                </span>
            </div>
        );
    }
}
export default CardDescriptionHeaderTitle;


