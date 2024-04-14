import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Buttons/Button";
import * as yup from "yup";
import axios from "axios";
import { Controller } from "react-hook-form";
import { validateRUT } from "validar-rut";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  
  yup.addMethod(yup.string, "rut", function (message) {
    return this.test("rut", message, function (value) {
      if (!value) {
        return true;
      }
      // Valida el RUT utilizando la librería de validación de RUT
      const isValidRUT = validateRUT(value);
      // console.log("es valid Rut:", isValidRUT);
      return isValidRUT || this.createError({ message });
    });
  });


  const schema = yup.object().shape({
    email: yup
      .string()
      .email("El email debe poseer un formato correcto")
      .required("El email es requerido"),
    name: yup.string().required("El nombre es requerido"),
    fullName: yup.string().required("El Apellido es requerido"),
    identificationDocument: yup.string().rut("El Rut no es válido").required(),
    phone: yup.string().max(10, "Ingrese un formato valido.").required("El numero de telefono es requerido"),
    // text: yup.string().required("El comentario es requerido"),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendFormToEmail = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/sendEmail",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });

      if (response.status == 200) {
        alert("Correo enviado con éxito");
      } else {
        alert("Error al enviar correo");
      }
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  };

  const formatData = (data) => {
    const formData = {
      email: data.email,
      rut: data.identificationDocument,
      phone: data.phone,
      // message: data.text,
      name: `${
        data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase()
      } ${
        data.fullName.charAt(0).toUpperCase() +
        data.fullName.slice(1).toLowerCase()
      }`,
      to: "contacto@lvconstructora.cl",
      subject: "Has sido contactado por un cliente",
    };
    return formData;
  };
 
  
  const onSubmit = (data) => {
    try {
      // console.log('data:', data);
      const newData = formatData(data);
      console.log("newData:", newData);
      sendFormToEmail(newData);
      // reset()
    } catch (e) {
      console.log("error");
    }
  };

  const onError = (error) => {
    console.log("Fetch error: ", error);
  };

  return (
    <section className={`contact-form ${styles.formPanel}`}> 
      <Container>
        <h2 className={styles.title}>Conoce más sobre el proyecto</h2>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={styles.formBox}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                className={styles.inputField}
                fullWidth
                type="text"
                size="small"
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Nombre"
                placeholder="Nombre"
                {...register("name")}
                error={Boolean(errors.name)}
                helperText={errors.name ? errors.name.message : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                size="small"
                className={styles.textFieldCustom}
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}  
                label="Apellido"
                placeholder="Apellido"
                {...register("fullName")}
                error={Boolean(errors.fullName)}
                helperText={errors.fullName ? errors.fullName.message : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                size="small"
                className={styles.textFieldCustom}
                id="outlined-helperText"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Número de teléfono"
                placeholder="Ejm: 995141844"
                {...register("phone")}
                error={Boolean(errors.phone)}
                defaultValue={phone}
                helperText={errors.phone ? errors.phone.message : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="identificationDocument"
                control={control}
                defaultValue={""}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    {...register("identificationDocument")}
                    className={styles.textFieldCustom}
                    id="outlined-required"
                    label="Rut"
                    error={Boolean(errors.identificationDocument)}
                    helperText={
                      errors.identificationDocument ? errors.identificationDocument.message : " "
                    }
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                size="small"
                required
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Correo electrónico"
                placeholder="nombre@mail.com"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : " "}
                // defaultValue={email}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12} md={12}>
              <TextField
                // label="Multiline"
                fullWidth
                id="standard-multiline-static"
                {...register("text")}
                placeholder="Mensaje"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1rem",
                  },
                }}
                multiline
                rows={3}
                variant="filled"
                error={Boolean(errors.text)}
                helperText={errors.text ? errors.text.message : " "}
                className={styles.customBox}
              />
            </Grid> */}
          </Grid>
          <Box style={{ marginTop: '16px' }}>
            <Button w100="true" type="submit">Enviar</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ContactForm;
