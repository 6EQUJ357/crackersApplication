import React from 'react'

const Footer = (params) => {
  return (
    <footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-sm-12 col-lg-6">
                <script>document.write(new Date().getFullYear())</script> © {params.value3?.[0].company_name}.
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
                <div className="text-sm-end d-none d-sm-block">
                <script>document.write(new Date().getFullYear())</script>Design & Developed By <i className="mdi mdi-heart text-danger"></i>
                <a href='https://msoftweb.online/' style={{color:"red", fontWeight:"bold"}} target='_blank'>Msoft</a>.  
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer