import React, {Component} from "react";
import CardDescriptionHeaderTitle from "./CardDesciptionHeaderTitle";
import CardDescriptionHeaderSubtitle from "./CardDescriptionHeaderSubtitle";

class CardDescriptionHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent: "space-between",
                alignItems: "stretch", ...this.props.style
            }} >
                <CardDescriptionHeaderTitle style={{flexBasis: "50%"}} title={this.props.title} withFavourite={this.props.withFavourite} />
                <CardDescriptionHeaderSubtitle style={{flexBasis: "50%"}} subtitle={this.props.subtitle} />
            </div>
        );
    }
}
export default CardDescriptionHeader;


