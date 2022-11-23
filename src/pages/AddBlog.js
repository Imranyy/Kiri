import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {projectStorage,ref,getDownloadURL,uploadBytesResumable} from "../firebase/FireBaseConfig";
import toast from "react-hot-toast";

function AddBlog(props) {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [error,setError]=useState(null);
    const [file,setFile]=useState(null);
    const [invalidError,setInvalidError]=useState('');
    const navigate=useNavigate();
    //upload item images
    const types=['image/png', 'image/jpeg'];
      const changeHandler=(e)=>{
        let selected=e.target.files[0]
        if(selected&&types.includes(selected.type)){
            setFile(selected)
            setError('')
            //uploading image to storage
            const storageRef=ref(projectStorage,selected.name);
            const uploadTask = uploadBytesResumable(storageRef, selected);
            uploadTask.on('state_changed',
             async()=>{
                try {
                     await getDownloadURL(storageRef).then((url)=>{
                      console.log(url);
                      localStorage.setItem('pic',url);
                     })
                     
                } catch (error) {
                    console.log(error)
                }
                     })
                     
        }else{
            setFile(null);
            setError('Please select an image file(png or jpeg)')
        }
      }
    //post blog to api
 const postBlog=async(e)=>{
    e.preventDefault();
    try {
        preloader();
        const url='http://localhost:5000/api/';
        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                pic:localStorage.getItem('pic'),
                title,
                body,
                author
            }),
            headers:{
                'content-type':'application/json'
            }
        })
        preloaderoff();
        toast.success('Blog successfully added');
        const parseRes=await response.json();
        console.log(parseRes);
        navigate('/blogs');
    } catch (error) {
        preloaderoff();
        toast.error('Please try again!')
        console.log(error.message)
    }
 }
 //preloader
 const preloader=()=>{
    const loader=document.querySelector('.preload');
    loader.style.display='block';
  }
  const preloaderoff=()=>{
    const loader=document.querySelector('.preload');
    loader.style.display='none';
  }
    return (
        <>
        <div className='preload'></div>
            <div className='add-blog-page'>
                <form onSubmit={postBlog}>
                    <label>Blog Title</label>
                    <input type='text' onChange={(e)=>setTitle(e.target.value)} required/>
                    <label>
                        Add Blog image:
                            <input type="file" onChange={changeHandler} />
                            <span>  
                                {/* <img src={img} className="avatar circle img" alt='Pic'/> */}
                            <br/>
                            </span>
                    </label>
                    <div className="img-response">
                        {error&&<div className='error' style={{color:'orangered'}}>{error}</div>}
                        {file&&<div style={{color:'green'}}>{file.name}</div>}
                    </div>
                    <textarea onChange={(e)=>setBody(e.target.value)} required></textarea>
                    <label>Author</label>
                    <input type='text' onChange={e=>setAuthor(e.target.value)} required/>
                    <button>Post Blog</button>
                </form>
            </div>
        </>
    );
}

export default AddBlog;