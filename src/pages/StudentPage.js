import React from "react";
import { Typography, Button } from "@material-ui/core";
import Header from "../components/Header";
import Tables from "../components/Tables";
import Modals from "../components/Modals";

const StudentPage = () => {
  const [editInfoData, setEditInfoData] = React.useState(null);
  const InitialState = {
    name: "",
    roll: "",
    class: "",
    section: "",
  };

  const [formValues, setFormValues] = React.useState(InitialState);
  const [errors, setErrors] = React.useState({});
  const [students, setStudents] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleDelete = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  const handleChange = (event) => {
    event.persist();
    setFormValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formValues.name) {
      formErrors.name = "Name is Required";
    }
    if (!formValues.roll) {
      formErrors.roll = "Roll No is Required";
    }
    if (!formValues.class) {
      formErrors.class = "Class is Required";
    }
    if (!formValues.section) {
      formErrors.section = "Section is Required";
    }

    if (formValues.class) {
      if (formValues.class < 1 || formValues.class > 12) {
        formErrors.class = "Class must be from 1 to 12";
      }
    }
    if (formValues.section) {
      const sec = formValues.section;
      if (sec.toUpperCase().length > 1) {
        formErrors.section = "Length should be 1 between A to F";
      }

      const array = ["A", "B", "C", "D", "E", "F"];

      const isTrue = array.includes(sec.toUpperCase());
      if (!isTrue) {
        formErrors.section = "Section must be between A to F";
      }
    }

    return formErrors;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (editInfoData) {
        const newStudent = students.map((item) => {
          if (item.id === editInfoData.id) {
            return {
              ...item,
              ...formValues,
            };
          }
          return item;
        });
        setStudents(newStudent);
        setOpen(false);
        setFormValues(InitialState);
        setEditInfoData(null);
      } else {
        setStudents([{ ...formValues, id: students.length + 1 }, ...students]);
        setOpen(false);
        setFormValues(InitialState);
      }
    }
  };

  const showModal = (studentInfo) => {
    setOpen(true);

    setEditInfoData(studentInfo);
  };

  React.useEffect(() => {
    if (editInfoData != null) {
      setFormValues(editInfoData);
    } else {
      setFormValues(InitialState);
    }
  }, [editInfoData, InitialState]);

  return (
    <div>
      <Header />
      <Modals
        open={open}
        handleClose={() => {
          setOpen(false);
          setEditInfoData(null);
          setErrors({});
        }}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={formValues}
        errors={errors && errors}
        editInfoData={editInfoData}
      />
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 40 }}>
        Students Information
      </Typography>

      <div className="table-container">
        <div className="button-container">
          <Button
            type="submit"
            className="add-student"
            onClick={() => {
              setOpen(true);
              setFormValues(InitialState);
            }}
            variant="contained"
          >
            Add New Student
          </Button>
        </div>
        <Tables
          studentLists={students}
          showModal={showModal}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default StudentPage;
