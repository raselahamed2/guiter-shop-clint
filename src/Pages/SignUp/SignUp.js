import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('')
    const [data, setData] = useState("");

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("User sign in successfully")

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(e => {
                        console.error(e.message)
                        setSignUpError(e.message)
                    })

            })
            .catch(e => console.error(e))
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
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder='email' />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6, message: 'Password must be 6 characters or longer',
                                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/, message: 'password must be strong' }
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder='password' />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password?</span>
                        </label>
                        {signUpError && <p>{signUpError}</p>}
                    </div>
                    <input className='btn btn-accent w-full my-5' value="Sign Up" type="submit" />
                    <div>
                    </div>
                </form>
                <p>Alredy have an account <Link className='text-secondary' to="/login">Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;