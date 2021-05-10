import React, { useState, useEffect } from "react";

const useValidate = (initState, validate, fn) => {
  const [data, setData] = useState(initState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitform] = useState(false);

  useEffect(() => {
    if (submitForm) {
      // Verifica si el objeto de errores esta vacio
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        fn(); // Ejecuta la funcion crear-cuenta o producto o login
      }
      setSubmitform(false); // Reinicia el form
    }
  }, []);

  // Funcion que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion que se ejecuta cuando el usuario hace submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate(data);

    setErrors(validateErrors);
    setSubmitform(true);
  };

  return [data, errors, submitForm, handleChange, handleSubmit];
};

export default useValidate;
