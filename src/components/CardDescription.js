import React, {Component} from "react";
import CardDescriptionHeader from "./CardDescriptionHeader";
import CardDescriptionHeaderSubtitle from "./CardDescriptionHeaderSubtitle";
import CardDescriptionBody from "./CardDescriptionBody";
import CardDescriptionFooter from "./CardDescriptionFooter";

class CardDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: "stretch",
                paddingLeft: 24,
                ...this.props.style
            }}>
                <CardDescriptionHeader
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    withFavourite={this.props.withFavourite}
                    style={{flex: "0 0 30%"}} />
                <CardDescriptionBody
                    style={{flex: "4 0 50%"}}
                    description1={this.props.description1}
                    description2={this.props.description2} />
                <CardDescriptionFooter
                    style={{flex: "0 0 20%"}}
                    RightLabel={this.props.footerRightLabel}
                    LeftLabel={this.props.footerLeftLabel} />
            </div>
        );
    }
}
export default CardDescription;


