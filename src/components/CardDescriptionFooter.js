import React, {Component} from "react";
import CardDescriptionHeaderTitle from "./CardDesciptionHeaderTitle";
import CardDescriptionHeaderSubtitle from "./CardDescriptionHeaderSubtitle";
import textStyles from "../styles/typography";
import Colors from "../styles/Color";

class CardDescriptionFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                ...this.props.style}} >
                <span style={{...textStyles.smallReg, color: Colors.darkGrey}}>
                    {this.props.LeftLabel}
                </span>

                <span style={{...textStyles.smallReg, color: Colors.darkGrey}}>
                    {this.props.RightLabel}
                </span>
            </div>
        );
    }
}
export default CardDescriptionFooter;


