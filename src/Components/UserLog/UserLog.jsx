import React from 'react'
import { useForm } from "react-hook-form";

export const UserLog = () => {

    const {register, handleSubmit, formState:{ errors}} = useForm();

    const onRegister = () =>{

    };

    const onSubmit = (dataForm) => {
        const userData = {...dataForm};

    };

  return (
    <main className='main-container'>
        <div className="form-container">
            <form className="border p-3 form" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label className='form-label' >User name</label>
                    <input type="text" className='form-control' placeholder='User name'
                        {...register("userName",
                            {   required:true,
                                maxLength:20,
                            })
                        }
                    />
                    {
                        errors.userName?.type === "required" &&(
                        <p>The field is required</p> 
                    )}
                    {
                        errors.userName?.type === "maxLength" && (
                            <p>Maximun of 20 characters</p>
                        )
                    }

                </div>

                <div>
                    <label className='form-label'>Password</label>
                    <input type="password" placeholder='Aa1$@!%*?&#' className='form-control'
                    {...register('userPassword',{
                        required:true,
                        maxLength:20,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,20}$/,
                    })} />
                    {
                        errors.userPassword?.type === 'pattern' && (
                            <p>Password must be between 8 and 20 characters and 
                            must have at least 1 uppercase letter, 1 lowercase letter,
                             1 essential character and 1 number</p>
                        )
                    }
                </div>

                <div>
                    <input className='btn btn-primary m-3' onClick={ () => onRegister()} type="submit" value="Loggin" />
                </div>
            </form>
        </div>

    </main>
  )
}
