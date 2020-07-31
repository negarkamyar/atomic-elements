import React, {Component} from "react";
import CardDescriptionHeaderTitle from "./CardDesciptionHeaderTitle";

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
                alignItem: "stretch", ...this.props.style
            }} >
                <CardDescriptionHeaderTitle title={this.props.title}>

                </CardDescriptionHeaderTitle>
                <div>
                    Subtitle
                </div>
            </div>
        );
    }
}
export default CardDescriptionHeader;


