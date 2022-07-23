import { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@material-ui/core";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  console.log("errors", errors);
  console.log("watch variable email", watch("email"));

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("form data is", data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          defaultValue="example@mail.com"
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ""}
            />
          )}
        />

        <input type="text" {...register("password")} />
        <br />
        {errors.password && errors.password?.message && (
          <span>{errors.password.message}</span>
        )}
        {/* //<span>This field is required</span> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default App;
