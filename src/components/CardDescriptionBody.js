import React, {Component} from "react";
import Colors from "../styles/Color";
import textStyles from "../styles/typography";

class CardDescriptionBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{flex: 1, paddingRight: 24}}>
                <p style={{color:Colors.darkGrey,...textStyles.mediumReg, wordSpacing: .6, marginTop: 0, marginBottom: 4, lineHeight: 1.37}}>
                    {this.props.description1}
                </p>
                <p style={{color:Colors.lightGrey,...textStyles.mediumReg, wordSpacing: .6, marginTop: 0, lineHeight: 1.37}}>
                    {this.props.description2}
                </p>
            </div>
        );
    }
}
export default CardDescriptionBody;


