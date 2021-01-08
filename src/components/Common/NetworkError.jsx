import React from "react";
import { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} al />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      fontSize: "20px",
      " .MuiSnackbar-anchorOriginTopCenter": {
        top: "50px !important",
      },
    },
  },
  anchorOriginTopCenter: {
    top: "50px ",
  },
  message: {
    padding: "11px 0",
  },
}));

export default function AlertMessage({ message, show, severity }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(show);
    return () => {};
  }, [show]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        classes={{ anchorOriginTopCenter: classes.anchorOriginTopCenter }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          classes={{ message: classes.message }}
        >
          <strong>{message}</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}
