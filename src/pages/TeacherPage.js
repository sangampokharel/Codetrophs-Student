import React from "react";
import Header from "../components/Header";
import Tables from "../components/Tables";
import { Typography, Button } from "@material-ui/core";
import TeacherModals from "../components/TeacherModal";
const TeacherPage = () => {
  const [open, setOpen] = React.useState(false);
  let Sections = [
    {
      id: 1,
      title: "Section A",
    },
    {
      id: 2,
      title: "Section B",
    },
    {
      id: 3,
      title: "Section C",
    },
    {
      id: 4,
      title: "Section D",
    },
    {
      id: 5,
      title: "Section E",
    },
    {
      id: 6,
      title: "Section F",
    },
  ];

  let TeachingClass = [
    {
      id: 1,
      title: "class 1",
    },
    {
      id: 2,
      title: "class 2",
    },
    {
      id: 3,
      title: "class 3",
    },
    {
      id: 4,
      title: "class 4",
    },
    {
      id: 5,
      title: "class 5",
    },
    {
      id: 6,
      title: "class 6",
    },
    {
      id: 7,
      title: "class 7",
    },
    {
      id: 8,
      title: "class 8",
    },
    {
      id: 9,
      title: "class 9",
    },
    {
      id: 10,
      title: "class 10",
    },

    {
      id: 11,
      title: "class 12",
    },
  ];
  const InitialState = {
    name: "",
    teacherId: "",
    class: [],
    section: [],
  };
  const [formValues, setFormValues] = React.useState(InitialState);
  const [errors, setErrors] = React.useState({});
  const [teachers, setTeachers] = React.useState([]);
  const [editData, setEditData] = React.useState(null);
  const handleDelete = (id) => {
    setTeachers(teachers.filter((item) => item.id !== id));
  };

  const handleChange = (event) => {
    event.persist();

    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const getClassInfo = (option) => {
    setFormValues({ ...formValues, class: option });
  };
  const getSectionsInfo = (option) => {
    setFormValues({ ...formValues, section: option });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!formValues.name) {
      formErrors.name = "Name is Required";
    }
    if (!formValues.teacherId) {
      formErrors.teacherId = "Teacher Id is Required";
    }
    if (formValues.class.length === 0) {
      formErrors.class = "Class is Required";
    }

    if (formValues.section.length === 0) {
      formErrors.section = "Section is Required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (editData) {
        const newTeacher = teachers.map((item) => {
          if (item.id === editData.id) {
            return {
              ...item,
              ...formValues,
            };
          }
          return item;
        });
        setTeachers(newTeacher);
        setOpen(false);
        setFormValues(InitialState);
        setEditData(null);
      } else {
        setTeachers([...teachers, { id: teachers.length + 1, ...formValues }]);
        setOpen(false);
        setFormValues(InitialState);
      }
    }
  };

  const showModal = (row) => {
    setOpen(true);
    setEditData(row);
  };

  React.useEffect(() => {
    if (editData) {
      setFormValues(editData);
    } else {
      setFormValues(InitialState);
    }
  }, [editData, InitialState]);

  return (
    <div>
      <TeacherModals
        open={open}
        handleClose={() => {
          setOpen(false);
          setEditData(null);
          setErrors({});
        }}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        getClassInfo={getClassInfo}
        getSectionsInfo={getSectionsInfo}
        values={formValues}
        errors={errors && errors}
        editInfoData={editData}
        TeachingClass={TeachingClass}
        Sections={Sections}
      />

      <Header />
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 40 }}>
        Teacher Information
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
            Add New Teacher
          </Button>
        </div>
        <Tables
          teacher
          teacherLists={teachers}
          showModal={showModal}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TeacherPage;
