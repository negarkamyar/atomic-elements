import React from 'react';
import Card from "../components/Card";

export default {
    title: "Card",
    component: Card,
};
export const withOnlyTitle= () => <Card
    withFavourite={false}
    title={"Card Title"}
    subtitle={"Subtitle"}
    description1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    description2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "}
    footerLeftLabel={"Detailed information"}
    footerRightLabel={"AU$432.000 Total"}
></Card>;
export const withTitleAndFavourite=  () =>  <Card
    withFavourite={true}
    title={"Card Title"}
    subtitle={"Subtitle"}
    description1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    description2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "}
    footerLeftLabel={"Detailed information"}
    footerRightLabel={"AU$432.000 Total"}
></Card>;
