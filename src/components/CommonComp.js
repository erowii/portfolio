import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { useLocalStore } from "mobx-react";
import { store } from "../Store";
import { CommonGameContainer } from "./GameDialogs/GameDialogs";

export function GridContainer({infoList}) {
  return (
    <Container sx={{ marginTop: 5 }} maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {infoList.map((gameInfo) => (
          <Grid
            key={gameInfo.name}
            xs={2}
            sm={4}
            md={4}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <ActionAreaCard
              image={gameInfo.image}
              title={gameInfo.name}
              tags={gameInfo.tags}
              info={gameInfo.info}
              pageDetail={gameInfo.page}
            ></ActionAreaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export function ActionAreaCard({ image, title, tags, info, pageDetail }) {
  const localStore = useLocalStore(() => store);
  const openGameDialogs = () => {
    localStore.dialogsOpen = true;
    localStore.gameDialogsInfo = {
      title: title,
      tags: tags || [],
      text: info,
      page: pageDetail ? (
        <CommonGameContainer infoList={pageDetail}></CommonGameContainer>
      ) : (
        <div></div>
      ),
    };
  };

  return (
    <Card sx={{ maxWidth: 285, textAlign: "left" }} onClick={openGameDialogs}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            whiteSpace="pre-line"
          >
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}