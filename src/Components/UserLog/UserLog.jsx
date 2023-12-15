import React,{useContext} from 'react'
import { useForm } from "react-hook-form";
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { createDocument } from '../../Utils/firestore';

export const UserLog = () => {

    const navigate = useNavigate();
    const {initialUser} = useContext(UserContext);

    const {register, handleSubmit, formState:{ errors}} = useForm();

   
    const onCancel = () => {
        navigate("/");
    };
    const onSubmit = (dataForm) => {
        
        const userData = {...dataForm};
        console.table(userData);
        initialUser(userData);
        createDocument(userData,'users');
        navigate("/");
        
    };

  return (
    <main className='main-container'>
        <div className="form-container">
            <form className="border p-3 form" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className='form-label' >User name</label>
                    <input type="text" className='form-control' placeholder='User name'
                        {...register("name",
                            {   
                                required:true,
                                maxLength:20,
                            })
                        }
                    />
                    {
                        errors.name?.type === "required" &&(
                        <p>The field is required</p> 
                    )}
                    {
                        errors.name?.type === "maxLength" && (
                            <p>Maximun of 20 characters</p>
                        )
                    }

                </div>

                <div className="mb-3">
                    <label className='form-label'>Password</label>
                    <input type="password" placeholder='Aa1$@!%*?&#' className='form-control'
                    {...register('password',{
                        required:true,
                        maxLength:20,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,20}$/,
                    })} />
                    {
                        errors.password?.type === 'pattern' && (
                            <p>Password must be between 8 and 20 characters and 
                            must have at least 1 uppercase letter, 1 lowercase letter,
                             1 essential character and 1 number</p>
                        )
                    }
                </div>

                <div className="mb-3">
                    <button className="btn btn-danger m-3" type="button" onClick={ onCancel}>Cancel</button>
                    <input className='btn btn-primary m-3'  type="submit" value="Loggin" />
                </div>
            </form>
        </div>

    </main>
  )
}
