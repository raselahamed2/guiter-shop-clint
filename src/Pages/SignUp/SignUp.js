import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center bg-base-100'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center text-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' {...register("name")} className="input input-bordered w-full " placeholder="Your Name" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder='email' />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder='password' />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full my-5' value="Sign Up" type="submit" />
                    <p>{data}</p>
                </form>
                <p>Alredy have an account <Link className='text-secondary' to="/login">Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;