import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup Successfully!');

                    navigate(from, { replace: true })

                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000)
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error('This is an error!');
                }
            })
        reset();
    };

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-[400px] relative dark:bg-black dark:border dark:text-white">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById('my_modal_4').close()}>✕</button>

                    <h3 className="font-bold text-lg">Signup</h3>

                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br />
                        <input type='text' placeholder='Enter Your Fullname'
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("fullname", { required: true })} />
                        <br />
                        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input type='email' placeholder='Enter Your Email'
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br />
                        <input type='password' placeholder='Enter Your Password'
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })} />
                        <br />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='flex justify-center mt-4'>
                        <button
                            type='submit'
                            className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                        >
                            Signup
                        </button>
                    </div>

                </form>
            </div>
        </dialog>
    );
};

export default Signup;




