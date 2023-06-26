import { useState } from "react";
import { useForm } from "react-hook-form";
import "./InfoForm.css";

function InfoForm() {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const [ hasSubmitted, setHasSubmitted ] = useState(false);
    const submitHandler = (data) => {
        setHasSubmitted(!hasSubmitted);
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" {...register("name", { required: true, maxLength: 100, disabled: hasSubmitted})}></input>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@mail.com" {...register("email", { required: true, disabled: hasSubmitted})}></input>
            {errors.email?.type === "validate" && (<p role="alert">Please enter a valid Email</p>)}

            <label htmlFor="phone">Mobile Phone Number</label>
            <input type="tel" id="phone" placeholder="07123456789" {...register("phone", { required: true, pattern: /^(07\d{9})$|^(\+447\d{9})$/, disabled: hasSubmitted})}></input>
            {errors.phone?.type === "pattern" && (<p role="alert">Please enter a valid UK mobile phone Number</p>)}

            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="42 Nowhere Lane" {...register("address", { required: true, disabled: hasSubmitted})}></input>

            <label htmlFor="dob">D.O.B</label>
            <input type="date" id="dob" {...register("dob", { required: true, disabled: hasSubmitted})}></input>

            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default InfoForm;