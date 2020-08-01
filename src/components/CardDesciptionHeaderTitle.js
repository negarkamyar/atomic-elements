import React, {Component} from "react";
import textStyles from "../styles/typography";
import Colors from "../styles/Color";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class CardDescriptionHeaderTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "start",
                justifyContent: "space-between",
                ...this.props.style
            }} >
                <span style={{...textStyles.largeBold, color: Colors.lightGrey}}>
                    {this.props.title}
                </span>
                {this.props.withFavourite && <FavoriteBorderIcon style={{color:Colors.darkGrey}}></FavoriteBorderIcon>}
            </div>
        );
    }
}
export default CardDescriptionHeaderTitle;


