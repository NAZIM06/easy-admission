import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';


const Register = () => {

 const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {  googleSignInUser } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignInUser()
          
    }
    const onSubmit = async data => {
        const name = data.name;
        const password = data.password;
        const email = data.email;
        
        setError('')
       
            // input code
    }

    return (
        <div className='mt-6' style={{ backgroundImage: 'url("https://i.ibb.co/b51Q46C/login-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='mx-auto p-10 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6'>
           
            <form className='p-10 bg-gray-800 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-4">
                    <p className="text-center font-bold text-3xl text-white">Register</p>
                    <label className='text-xl font-semibold mb-3 text-white'>Name</label>
                    <input placeholder='Name' className='mb-5 p-3 focus:outline-none bg-black text-white' {...register('name', { required: true })} />
                    {errors?.name?.types === 'required' && <p className='text-red-800 mb-2'>Name is required</p>}
                    <label className='text-xl font-semibold mb-3 text-white'>Email</label>
                    <input placeholder='Email' className='mb-5 p-3 focus:outline-none bg-black text-white' {...register('email', { required: true })} />
                    {errors?.email?.types === 'required' && <p className='text-red-800 mb-2'>Email is required</p>}
                </div>
                <label className='text-xl font-semibold mb-3 text-white'>Password</label>
                <div className='relative w-full'>
                    <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none bg-black text-white' type={show ? 'text' : 'password'} {...register('password')} />
                    <div onClick={() => setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
                        {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
                    </div>
                </div>
                <p className='mb-3 text-white'>Already have an account ? <Link to='/login'><span className='text-btn-color underline text-[#00AFFA]'>Please login</span></Link></p>
                <button type='submit' className='button mx-auto flex justify-center w-full'>Register</button>
            </form>
            <div onClick={handleGoogleSignIn} className='my-5 flex w-10/12 sm:w-full  mx-auto p-2 justify-between items-center hover:bg-black hover:text-white cursor-pointer border-2 rounded-xl'>
                <FcGoogle className='h-6 w-6' />
                <p className='font-semibold mx-auto text-white'>Continue with Google</p>
            </div>
        </div>

    </div>
);
};

export default Register;