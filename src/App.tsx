import { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  return (
    <main>
      <form>
        <input type="text" defaultValue="example" {...register("email")} />
        <input type="text" {...register("password", { required: true })} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default App;
