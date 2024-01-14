import React from "react";
import MyCirclePacking from "./MyCirclePacking"; // Adjust the path as necessary
import Logo from "./logo.svg";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{marginTop: "0"}}>
                    The Emissions of a Genocide{" "}
                    <img src={Logo} alt="Logo" style={{width: ".8em", marginLeft: ".001"}} />
                </h1>

                <p className="responsive-paragraph">
                What is the scale of CO2 emissions generated since the beginning of the Israel-Gaza conflict? While in the West, there is a significant emphasis on achieving CO2 emission reductions, often yielding only minimal gains. Considering this context, how substantial are the CO2 emissions attributable to the conflict to date, and what efforts will be required to mitigate the environmental impact of these emissions?
                </p>
                <div
                    style={{
                        display: "inline-flex",
                        flexDirection: "row",
                        backgroundColor: "#3496d3",
                        padding: "1em",
                        borderRadius: "10px",
                        width: "auto", // Default width for mobile

                        // Media query for desktop
                        "@media (min-width: 768px)": {
                            width: "100%", // Adjust this value for desktop width
                        },
                    }}
                >
                    <FontAwesomeIcon icon={faCar} color="#ffffff" />
                    <span style={{color: "white", marginLeft: "10px"}}>1 car icon ≈ 4.6 tonnes CO2e/year</span>
                </div>
                <MyCirclePacking />
            </header>
        </div>
    );
}

export default App;
