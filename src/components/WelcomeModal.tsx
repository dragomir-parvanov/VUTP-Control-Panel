import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function WelcomeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal style={{margin:"2%"}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper style={{padding:"3%"}}>
            <Typography id="transition-modal-title" variant={"h6"}>
              Welcome! Before you go...
            </Typography>
            <Typography id="transition-modal-description">All data in this application is random generated for test purposes, including but not limited to emails, phone numbers and names.</Typography>
                      <Typography>If an email or phone number gets to be a real existing one, it is just a coincidence </Typography>
            <Button onClick={()=>setOpen(false)}>Ok</Button>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}


