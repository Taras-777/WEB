import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";

export const PlaneCard = (props) => (
    <Card
        style={{width: "150px", height: '290px'}}
        hoverable
        cover={<img src={props.image} alt="example" style={{width:'150px', height: '90px'}}  />}>
        <Card.Meta
            title={props.name}
            description={
                <div>
                    <p>Fuel: {props.fuel}</p>
                    <p>Made in: {props.madein}</p>
                    <p>Passengers: {props.passengers}</p>
                </div>
            }
        />
    </Card>
);
