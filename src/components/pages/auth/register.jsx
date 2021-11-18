
import React from 'react';
import { useForm } from 'react-hook-form';

function Register(props) {
    // const [username, setUsername] = useState('')

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 col-sm-5 m-auto'>
                    <div>
                        <h1 className='text-center display-5 mb-4 mt-4'>CREATE YOUR ACCOUNT</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor='user' className='mb-2 h6' >UserName : </label>
                        {/* <input type='text' onChange={(e) => setUsername(e.target.value)} className='form-control'></input> */}
                        <input className='form-control' id='user' {...register('username', {
                            required: 'Can not empty', maxLength: {
                                value: 5,
                                message: 'Maximun : 5 letter'
                            }
                        })} />

                        {errors.username && <span>{errors.username.message}</span>}
                        <div className='form-group'>
                            <label htmlFor='email' className='mb-2 h6'>Email :</label>
                            <input type='email' id='email' className='form-control' {...register('email', { required: true })}></input>
                            {/* <input type='email' onChange={(e) => setEmail(e.target.value)} className='form-control'></input> */}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='' className='mb-2 h6'>Password :</label>
                            <input type='password' className='form-control' {...register('password', {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'No Number'
                                },

                            })}>
                            </input>
                            {errors.password && <span>{errors.password.message}</span>}

                            {/* <input type='password' onChange={(e) => setPassword(e.target.value)} className='form-control'></input> */}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='' className='mb-2 h6'>Confirm Password :</label>
                            <input type='password' className='form-control'></input>
                            {/* <input type='password' onChange={(e) => setPassword(e.target.value)} className='form-control'></input> */}
                        </div>
                        <span >Currently,we haven't had sign up feature yet. We will update it in the future. Please Login by your
                            <a href='/' className='text-primary'> Google Account</a> 
                        </span>
                        <div className='form-group mt-4'>
                            <button className='btn btn-success form-control' type='submit'>Submit</button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
}

export default Register;