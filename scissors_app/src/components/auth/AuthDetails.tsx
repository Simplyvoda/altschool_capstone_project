import  {useEffect, useState} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth/cordova';
import { auth } from '../../../src/firebase';
import {  CurrentUser } from '../../interfaces/authInterface';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState<CurrentUser|null>(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                console.log(user)
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
       return () => listen()
    }, [])

    const userSignout = () => {
        signOut(auth).then(()=>{
            console.log('User signed out')
            toast.success('User signed out')
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }).catch(err=>console.log(err))
    }

    return (
        <>
            {
                authUser ? <><p>Signed In as {authUser.email}</p> <button onClick={userSignout}>Sign Out</button></> : ""
            }
        </>
    )
}

export default AuthDetails