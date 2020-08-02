import React from 'react';
import Card from "../components/Card";

export default {
    title: "Card",
    component: Card,
};
export const withOnlyTitle= () => <Card
    withFavourite={false}
    title={"Card Title"}
    imageSource={require('../assets/images/301d3473f887cdc2e4c0b33d3cc1cc14.jpg')}
    subtitle={{type: 'text', data: 'Card Subtitle'}}
    description1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    description2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "}
    footerLeftLabel={"Detailed information"}
    footerRightLabel={"AU$432.000 Total"}
></Card>;
export const withTitleAndFavourite=  () =>  <Card
    withFavourite={true}
    title={"Card Title"}
    imageSource={require('../assets/images/301d3473f887cdc2e4c0b33d3cc1cc14.jpg')}
    subtitle={{type: 'text', data: 'Card Subtitle'}}
    description1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    description2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "}
    footerLeftLabel={"Detailed information"}
    footerRightLabel={"AU$432.000 Total"}
></Card>;

export const withRating = () =>  <Card
    imageSource={require('../assets/images/301d3473f887cdc2e4c0b33d3cc1cc14.jpg')}
    withFavourite={true}
    title={"Card Title"}
    subtitle={{type: 'rating', data: {value: 4.5, precision: 0.5}}}
    description1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    description2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "}
    footerLeftLabel={"Detailed information"}
    footerRightLabel={"AU$432.000 Total"}
></Card>;
