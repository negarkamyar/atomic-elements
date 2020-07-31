import React, {Component} from "react";
import CardDescription from "./CardDescription";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div style={{
                height: 260,
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
                <CardDescription title={this.props.title} style={{
                    flex: 2,
                }} >
                </CardDescription>
            </div>
        );
    }
}
export default Card;