import React from "react";
import {
  makeStyles,
  Modal,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

function getModalStyle() {
  return {
    top: `${10}%`,
    left: `${30}%`,
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

const TeacherModals = ({
  open,
  values,
  errors,
  handleChange,
  handleClose,
  handleSubmit,
  editInfoData,
  getClassInfo,
  getSectionsInfo,
  TeachingClass,
  Sections,
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
            {editInfoData !== null ? "Edit Teacher" : "Add Teacher"}
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
              type="text"
              label="Teacher ID"
              name="teacherId"
              onChange={handleChange}
              value={values.teacherId}
              helperText=""
              variant="outlined"
              className="textField"
              autoComplete="off"
              error={errors && (errors.teacherId ? true : false)}
              helperText={errors && errors.teacherId}
            />

            <Autocomplete
              multiple
              id="tags-outlined"
              options={TeachingClass}
              getOptionLabel={(option) => {
                return option.title;
              }}
              onChange={(event, data) => getClassInfo(data)}
              defaultValue={values.class}
              filterSelectedOptions
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    error={errors && (errors.class ? true : false)}
                    helperText={errors && errors.class}
                    variant="outlined"
                    label="Class"
                  />
                );
              }}
            />

            <Autocomplete
              multiple
              id="tags-outlined"
              options={Sections}
              getOptionLabel={(option) => {
                return option.title;
              }}
              defaultValue={values.section}
              onChange={(event, data) => getSectionsInfo(data)}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={errors && (errors.section ? true : false)}
                  helperText={errors && errors.section}
                  variant="outlined"
                  label="Section"
                />
              )}
            />

            <Button type="submit" variant="contained" onClick={handleSubmit}>
              {editInfoData !== null ? "Edit Teacher" : "Add Teacher"}
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherModals;
