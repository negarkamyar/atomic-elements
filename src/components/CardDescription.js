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
                    style={{flex: "1 1 32%"}} />
                <CardDescriptionBody
                    style={{flex: "1 1 55%"}}
                    description1={this.props.description1}
                    description2={this.props.description2} />
                <CardDescriptionFooter
                    style={{flex: "1 1 13%"}}
                    RightLabel={this.props.footerRightLabel}
                    LeftLabel={this.props.footerLeftLabel} />
            </div>
        );
    }
}
export default CardDescription;


