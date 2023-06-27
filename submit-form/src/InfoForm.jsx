import { useState } from "react";
import { useForm } from "react-hook-form";
import "./InfoForm.css";
import Spinner from "./Spinner";

function InfoForm() {
    const { register, reset, formState: {errors}, handleSubmit } = useForm();
    const [ hasSubmitted, setHasSubmitted ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(false);

    const submitHandler = async (data) => {
        setHasSubmitted(true);
        try {
            await fetch("http://localhost:9090", {
                method: "POST",
                body: JSON.stringify(data)
            })
        }
        catch (err) {
            setIsError(true);
            console.log(err);
            setHasSubmitted(false);
            return;
        };

        setIsSuccess(true);
        reset();
        setHasSubmitted(false);
        setIsError(false);
    }

    return (
        <div className="InfoForm">
            <dialog id="success" open={isSuccess}>
                Form Submitted Successfully
                <button onClick={() => setIsSuccess(false)}>OK</button>
            </dialog>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required {...register("name", { maxLength: 100, disabled: hasSubmitted || isSuccess})}></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="example@mail.com" required {...register("email", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, disabled: hasSubmitted || isSuccess})}></input>
                {errors.email?.type === "pattern" && (<p role="alert">Please enter a valid email!</p>)}

                <label htmlFor="phone">Mobile Phone Number</label>
                <input type="tel" id="phone" placeholder="07123456789" required {...register("phone", { pattern: /^(07\d{9})$|^(\+447\d{9})$/, disabled: hasSubmitted || isSuccess})}></input>
                {errors.phone?.type === "pattern" && (<p role="alert">Please enter a valid UK mobile phone number!</p>)}

                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="42 Nowhere Lane" required {...register("address", { disabled: hasSubmitted || isSuccess})}></input>

                <label htmlFor="dob">D.O.B</label>
                <input type="date" id="dob" required {...register("dob", { disabled: hasSubmitted || isSuccess})}></input>

                <button type="submit" disabled={hasSubmitted || isSuccess}>{hasSubmitted ? <Spinner/> : "Submit"}</button>
            </form>
            {isError && <p role="alert">Something went wrong! Please check your network then try again.</p>}
        </div>
    );
}

export default InfoForm;