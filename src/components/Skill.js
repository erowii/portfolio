import * as React from "react";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

export function Skill() {
  return (
    <Container sx={{ marginTop: 5 }} maxWidth="xs">
        <Chip sx={{ m: 1 }} icon={<Icon icon="typescript"/>} label="Typescript" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="javascript"/>} label="Javascript" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="java"/>} label="Java" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="cocos"/>} label="CocosCreator" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="layaair"/>} label="Layaair" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="createjs"/>} label="Createjs" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="nodejs"/>} label="Nodejs" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="react"/>} label="React" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="html5"/>} label="Html5" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="smartfox"/>} label="Smartfox" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="gsap"/>} label="gsap" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="kibana"/>} label="Kibana" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="elastic"/>} label="Elastic" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="logstash"/>} label="Logstash" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="github"/>} label="Github" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="gitlab"/>} label="Gitlab" variant="outlined" />
        <Chip sx={{ m: 1 }} icon={<Icon icon="sourcetree"/>} label="Sourcetree" variant="outlined" />
    </Container>
  );
}

function Icon({icon}) {
    return <img src={"static/images/icon/" + icon + ".png"} style={{width: 32}} alt=""></img>
}
