import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import "./index.css";

const data = {
    name: "Total",
    children: [
        {
            name: "Total",
            children: [
                {name: "Fuel Consumption", value: 1.92},
                {name: "Artillery", value: 2.59},
                {name: "TNT", value: 0.075},
                {name: "Homes Destroyed", value: 27.5},
                {name: "Emisions to Rebuild", value: 28.25},
            ],
        },
    ],
};

// Define the average CO2e emissions produced by a car in a year (in tonnes)
const carEmissionsPerYear = 4.6; // Example value, replace with actual value
// Calculate the equivalent number of cars for the "Reconstruction" data point
const reconstructionValue = 28.25; // million tonnes
const equivalentCars = reconstructionValue * 1000000 / carEmissionsPerYear;

const customTooltip = ({ id, value }) => (
  <div
      style={{
          background: "white",
          padding: "10px",
          border: "1px solid #ccc",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          color: "black",
      }}
  >
      <strong>{id}</strong>: {value.toFixed(2)}M tonnes CO2e
      <br />
      <b>Equivalent to:</b> {(value * 1000000 / carEmissionsPerYear).toLocaleString()} cars/year
  </div>
);

const reversedPurpleBlue = [
    "#3DA9DE",
    "#2881B4",
    "#6BBDEE",
    "#5BAFD7",
    "#A2D9F2",
    "#DE5D3D",
    "#3DA9DE",
    "#2881B4",
    "#6BBDEE",
].reverse();

const MyCirclePacking = () => (
    <div
        style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        {" "}
        <ResponsiveCirclePacking
            data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}
            id="name"
            value="value"
            colors={reversedPurpleBlue}
            childColor={{from: "color", modifiers: [ [ "brighter", 0.4 ] ]}}
            padding={25} // Increase this value to spread the circles out more
            enableLabels={true}
            labelsSkipRadius={20}
            labelsTextColor="white"
            labelsTextProps={{style: {fill: "white", fontWeight: "bold"}}}
            theme={{
                labels: {
                    text: {
                        fontSize: "12px", // Adjust font size as needed
                    },
                },
            }}
            tooltip={customTooltip}
        />
        
    <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'white',
            padding: '5px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.8em',
        }}>
           
        </div>
    </div>
);

export default MyCirclePacking;