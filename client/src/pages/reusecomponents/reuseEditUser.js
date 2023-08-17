import React, {useState} from 'react'
import Reusenavbar from './reusenavbar'
import Sidebar from '../components/sidebar'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import Footer from '../components/footer'


import API_BASE_URL from "../components/config";


const ReuseEditsUser = (params) => {

    let location = useLocation();

    const userData = location.state;
    //console.log("first", userData)

    const [pass1, setPass1] = useState("password")
  let [eyeoff1, setEye1] = useState("eye-slash")

  const togleHandle1= ()=>{
    if(pass1 ==="password"){
        setPass1("text")
        setEye1("eye-slash")
 
    }
    else{
        setPass1("password")
        setEye1("eye")

    }
}

    const formik = useFormik({
        initialValues : {
            editusername : userData.username,
            edituseremail : userData.email, 
            edituserpassword : "",
        },
        validationSchema:Yup.object({
            editusername : Yup.string().required("Name Required"),
            edituseremail : Yup.string().required("Type Required"),
            edituserpassword : Yup.string().min(6, "Password Must Be 6 Characters At Least").required("Password Required")

        }),
        onSubmit :(values, {resetForm})=>{
           
            axios.put(`${API_BASE_URL}/edituserdetails/${userData._id}`, values).then(res=>alert(res.data.message)).catch(err=>console.log(err));

            //resetForm({values:""})
        }
 
    })


  
  return (
    <div>
            {/* Begin page */}
    <div id="layout-wrapper">
     <Reusenavbar value1 ={params.value1} value2 = {params.value2} value3 = {params.value3}/>


{/* removeNotificationModal */}
<div id="removeNotificationModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div className="modal-body">
                <div className="mt-2 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:"100px",height:"100px"}}></lord-icon>
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                </div>
            </div>

        </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
</div>{/* /.modal */}
        {/* ========== App Menu ========== */}
        <div className="app-menu navbar-menu">
            {/* LOGO */}
           
            {/* sidebar start */}
            <Sidebar value1={params.value1} value2 = {params.value2} value3={params.value3}/>
            {/* sidebar end */}

        </div>
        {/* Left Sidebar End */}
        {/* Vertical Overlay*/}
        <div className="vertical-overlay"></div>

        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Update User</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href='#a'>User</a></li>
                                        <li className="breadcrumb-item active">Update User</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end page title */}


                    <div className="row">

                    <div className="col-sm-4">
                            <Link to="/users" className="btn btn-primary addtax-modal"> Go To User</Link>
                            </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                   <div className="p-2">
                                    
                                    {/* add product form */}
                                    <form onSubmit={formik.handleSubmit}>
                                        
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label" for="productname">Name</label>
                                                <input id="productname" name="editusername" placeholder="Enter Name" type="text" className="form-control" {...formik.getFieldProps("editusername")}/>
                                                {formik.errors.editusername ? <small style={{color:"red"}}>{formik.errors.editusername}</small> : null}
                                            </div>
                                        </div>
                                       
                                    </div>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="product type">Email</label>
                                                        <input id="product type" name="edituseremail"  type="email" className="form-control" {...formik.getFieldProps("edituseremail")} placeholder="Enter Email"/>
                                                        {formik.errors.edituseremail ? <small style={{color:"red"}}>{formik.errors.edituseremail}</small> : null}

                                                </div>
                                            </div>

                                            <div className="col-lg-6">

                                                <label className="form-label" for="price">Password</label>

                                                <div className="position-relative auth-pass-inputgroup mb-3">

                                                    <input id="price" name="edituserpassword" placeholder="Enter Password" type={pass1} className="form-control" {...formik.getFieldProps("edituserpassword")} />

                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={()=>togleHandle1()}><i className={`las la-${eyeoff1} align-middle fs-18`}></i></button>

                                                </div>
                                                {formik.errors.edituserpassword ? <small style={{color:"red"}}>{formik.errors.edituserpassword}</small> : null}

                                            </div>                                         

                                        </div>                                      

                                        <div className="hstack gap-2 mt-4">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div> 
                                    </form>

                                   

                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container-fluid */}
            </div>
            {/* End Page-content */}

            <Footer value3 ={params.value3}/>
        </div>
        {/* end main content*/}

    </div>
    {/* END layout-wrapper */}

    {/*start back-to-top*/}
    <button onclick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/*end back-to-top*/}

    {/* preloader
    <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

   

    </div>
  )
}

export default ReuseEditsUser
