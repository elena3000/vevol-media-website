import React from "react";
import { Container, Title } from "bloomer";
import "./homepage-services.scss";
import Fade from "react-reveal/Fade";
import calendarInfo from "../../enums/general";
import { Parallax } from "react-parallax";

export default function HomepageServices() {
    const today = new Date();
    const day = today.getDate();
    const weekday = calendarInfo.DAYS[today.getDay()];
    const month = calendarInfo.MONTHS[today.getMonth()];
    const year = today.getFullYear();

    return (
        <div
            className="homepage-services"
            onScroll={() => {
                console.log("asd");
            }}
        >
            <Container>
                <div className="homepage-services__intro">
                    <div className="intro__time">
                        <Fade top duration={300}>
                            <span>Today is</span>
                        </Fade>
                        <Fade delay={600}>
                            <span>{weekday}</span>
                        </Fade>
                        <Fade bottom delay={900}>
                            <span>{`${day} ${month} ${year}`}</span>
                        </Fade>
                    </div>
                    <div className="intro__text">
                        <Fade>
                            <p>
                                You already waited too long. Your business needs
                                something new, better, bold.
                            </p>
                        </Fade>
                    </div>
                </div>
            </Container>
            <div className="homepage-services__blocks">
                <Parallax
                    strength={200}
                    renderLayer={(percentage) => (
                        <div>
                            <p
                                style={{
                                    left: -200 + percentage * 150,
                                }}
                            >
                                {[...Array(10)].map((x, i) => (
                                    <span key={i}>New</span>
                                ))}
                            </p>
                            <p
                                style={{
                                    right: percentage * 200,
                                }}
                            >
                                {[...Array(10)].map((x, i) => (
                                    <span key={i}>Better</span>
                                ))}
                            </p>
                            <p
                                style={{
                                    left: -800 + percentage * 400,
                                }}
                            >
                                {[...Array(10)].map((x, i) => (
                                    <span key={i}>Bold</span>
                                ))}
                            </p>
                        </div>
                    )}
                ></Parallax>
            </div>
            <Container>
                <Title tag="h2" className="homepage-services__heading">
                    <Fade left>
                        <span>We</span>
                    </Fade>
                    <Fade top delay={750}>
                        <span>Can</span>
                    </Fade>
                    <Fade right delay={1500}>
                        <span>Help</span>
                    </Fade>
                </Title>
            </Container>
        </div>
    );
}
