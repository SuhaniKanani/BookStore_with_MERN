import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {

    // data goes to console
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Form data:", data);
        reset();
    };
    // data goes to console


    return (
        <>
            <div className='flex h-screen items-center justify-center dark:text-white'>

                <div className='w-[700px]'>
                    <div className='modal-box dark:bg-black dark:border dark:shadow'>
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>


                            <h1 className="font-bold text-lg flex justify-center ">Contact Us</h1>

                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type='text' placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })} />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Message</span><br />

                                <textarea placeholder='Enter Your Message' className='w-80 h-32 px-3 py-1 border rounded-md outline-none'
                                    {...register("message", { required: true })} ></textarea>


                                <br />
                                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>


                            <div className=' mt-4'>
                                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
