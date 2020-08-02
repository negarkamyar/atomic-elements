import React, {Component} from "react";
import textStyles from "../styles/typography";
import Colors from "../styles/Color";
import RatingWithLabel from "./RatingWithLabel";

class CardDescriptionHeaderSubtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subtitleBody;

        if(this.props.subtitle.type == 'rating'){
           subtitleBody =
               <RatingWithLabel style={{display: "flex", alignItems: 'center', flexDirection: 'row'}} data={this.props.subtitle.data}></RatingWithLabel>
        } else {
            subtitleBody = <span style={{...textStyles.smallReg, color:Colors.darkGrey}}>
                    {this.props.subtitle.data}
            </span>
        }
        return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "flex-start", ...this.props.style
            }} >
                {subtitleBody}

            </div>
        );
    }
}
export default CardDescriptionHeaderSubtitle;


