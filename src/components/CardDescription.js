import React, {Component} from "react";
import CardDescriptionHeader from "./CardDescriptionHeader";

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
                paddingLeft: 24,...this.props.style
            }}>
                <CardDescriptionHeader title={this.props.title}style={{
                    flex: 1,
                }}>
                </CardDescriptionHeader>
                <div style={{
                    backgroundColor: "blue",
                    flex: 3,
                }}>
                </div>
                <div style={{
                    backgroundColor: "black",
                    flex: 1,
                }}>
                </div>
            </div>
        );
    }
}
export default CardDescription;


