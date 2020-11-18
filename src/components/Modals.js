import React from "react";
import {
  makeStyles,
  Modal,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

function getModalStyle() {
  const top = 10;
  const left = 30;

  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modals = ({
  open,
  values,
  errors,
  handleChange,
  handleClose,
  handleSubmit,
  editInfoData,
}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            {editInfoData !== null ? "Edit Student" : "Add student"}
          </Typography>
          <form style={{ textAlign: "center" }}>
            <TextField
              id="outlined-helperText"
              label="Name"
              name="name"
              onChange={handleChange}
              value={values.name}
              className="textField"
              variant="outlined"
              autoComplete="off"
              error={errors && (errors.name ? true : false)}
              helperText={errors && errors.name}
            />

            <TextField
              id="outlined-helperText"
              type="number"
              label="Roll No"
              name="roll"
              onChange={handleChange}
              value={values.roll}
              helperText=""
              variant="outlined"
              className="textField"
              autoComplete="off"
              error={errors && (errors.roll ? true : false)}
              helperText={errors && errors.roll}
            />

            <TextField
              id="outlined-helperText"
              type="number"
              min={1}
              max={12}
              name="class"
              onChange={handleChange}
              value={values.class}
              label="Class"
              helperText=""
              variant="outlined"
              className="textField"
              autoComplete="off"
              error={errors && (errors.class ? true : false)}
              helperText={errors && errors.class}
            />

            <TextField
              error
              id="outlined-helperText"
              label="Section"
              maxLength={1}
              name="section"
              onChange={handleChange}
              value={values.section}
              helperText="Incorrect"
              variant="outlined"
              className="textField"
              autoComplete="off"
              error={errors && (errors.section ? true : false)}
              helperText={errors && errors.section}
            />
            <br />
            <br />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              {editInfoData !== null ? "Edit Student" : "Add student"}
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
