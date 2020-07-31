import React from 'react';
import Card from "../components/Card";

export default {
    title: "Card",
    component: Card,
};
export const withTitle= () => <Card title={"Card Title"}
></Card>;
