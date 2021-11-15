import React from "react";
import {HomepageStyled} from "./Homepage.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage";
import {PlaneCard} from "../../../components/Card/PlaneCard";
import boeing from "../../../images/boeing.jpg";
import uki from "../../../images/uki.jpg"
import plane_mria from "../../../images/plane_mria.jpg"


export const Homepage = () => (
    <HomepageStyled>
        <WelcomeSection />
        <CardStorage>
            <PlaneCard image={boeing}
                       name="Boeing 377"
                       fuel="3100 l"
                       madein="USA"
                       passengers="200"
            />
            <PlaneCard image={plane_mria}
                       name="Dream"
                       fuel="1000 l"
                       madein="Ukraine"
                       passengers="350"
            />
            <PlaneCard image={uki}
                       name="RSK-500"
                       fuel="200 l"
                       madein="UK"
                       passengers="100"
            />
        </CardStorage>
    </HomepageStyled>
);
