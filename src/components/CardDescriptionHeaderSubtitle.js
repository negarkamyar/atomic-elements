import React, {Component} from "react";
import textStyles from "../styles/typography";
import Colors from "../styles/Color";

class CardDescriptionHeaderSubtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "flex-start", ...this.props.style
            }} >
                <span style={{...textStyles.smallReg, color:Colors.darkGrey}}>
                    {this.props.subtitle}
                </span>
            </div>
        );
    }
}
export default CardDescriptionHeaderSubtitle;


