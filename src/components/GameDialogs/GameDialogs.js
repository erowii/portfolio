import * as React from "react";
import PropTypes from "prop-types";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Observer, useLocalStore } from "mobx-react";
import { store } from "../../Store";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    height: "90%",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function GameDialogs() {
  const [fullWidth] = React.useState(true);
  //sx:最大, xl:次大, lg:中大 md:中, sm:次小, xs:最小
  const [maxWidth] = React.useState("lg");
  const localStore = useLocalStore(() => store);

  const handleClose = () => {
    localStore.dialogsOpen = false;
  };

  return (
    <Observer>
      {() => (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={localStore.dialogsOpen}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            sx={{ fontWeight: 700 }}
          >
            {localStore.gameDialogsInfo.title}
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {localStore.gameDialogsInfo.text}
              <br />
              {localStore.gameDialogsInfo.tags.map((tag, i) => (
                <span style={{ fontSize: "14px", color: "gray" }} key={i}>
                  {tag + " "}
                </span>
              ))}
            </Typography>
            {localStore.gameDialogsInfo.page}
          </DialogContent>
        </BootstrapDialog>
      )}
    </Observer>
  );
}

const style = {
  marginTop: 2,
  alignItems: "center",
  display: "flex",
};

//共用介紹頁面容器
export function CommonGameContainer({ infoList }) {
  return (
    <div>
      {infoList.map((info, i) => (
        <InfoContainer key={i} info={info}></InfoContainer>
      ))}
    </div>
  );
}

export function InfoContainer({ info }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Typography variant="h6" sx={style} onClick={handleClick}>
        <ArrowRightIcon sx={{ display: open ? "none" : "block" }} />
        <ArrowDropDown sx={{ display: !open ? "none" : "block" }} />
        {info.title}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {info.images.map((src, i) => (
            <img
              key={i}
              src={src} alt="" 
              style={{ marginLeft: 10, maxHeight: "440px", maxWidth:"100%" }}
            ></img>
        ))}
        <br />
        {info.video.map((src, i) => (
          <CardMedia
            controls
            component="video"
            src={src}
            key={i}
            sx={{ ml: 1, width: "360px", height: "240px" }}
          ></CardMedia>
        ))}
      </Collapse>
    </div>
  );
}
