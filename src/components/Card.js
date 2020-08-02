import React, {Component} from "react";
import CardDescription from "./CardDescription";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                minHeight: 260,
                width: 700,
                backgroundColor: "white",
                borderRadius: 10,
                boxShadow: "1px 1px 4px rgba(144, 144, 144, 0.7)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "stretch",
                padding: 24}} >
                <div style={{
                    flex: 1,
                    backgroundColor: "#F0F0F0",
                }} >
                </div>
                <CardDescription
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    withFavourite={this.props.withFavourite}
                    description1={this.props.description1}
                    description2={this.props.description2}
                    footerLeftLabel={this.props.footerLeftLabel}
                    footerRightLabel={this.props.footerRightLabel}
                    style={{ flex: 2 }} />
            </div>
        );
    }
}
export default Card;