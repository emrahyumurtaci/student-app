import axios from "axios";
import React, { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";


const AddStudent = () => {
    const [studentNo, setStudentNo] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();

        if (studentNo==="" || name==="" || surname==="" || studentClass==="" || schoolName===""){
            alert("BÜTÜN ALANLAR DOLDURULMALIDIR!")
        }
        
        const newStudent={
             id:String(new Date().getTime()),
             name:name,
             surname:surname,
             studentNo:studentNo,
             studentClass:studentClass,
             schoolName:schoolName
         }

         axios.post("http://localhost:3004/students",newStudent)
         .then((res)=>{
           navigate("/")
 
         })
         .catch((err)=>{
            console.log(err);
            alert("kayıt esnasında bir hata oluştu")
         })

    }








    return (
        <div>
            
            <Header />
            <div className="container mt-5 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3">
                            <label for="exampleFormControlInput1" className="form-label">ÖĞRENCİ NUMARASI</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="number"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: 1111"
                                value={studentNo}
                                onChange={(event)=>setStudentNo(event.target.value)}
                            /></div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3"><label for="exampleFormControlInput1" className="form-label">ADI</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: AHMET"
                                value={name}
                                onChange={(event)=>setName(event.target.value)}
                            /></div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3"><label for="exampleFormControlInput1" className="form-label">SOYADI</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: TURAN"
                                value={surname}
                                onChange={(event)=>setSurname(event.target.value)}
                            /></div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3"><label for="exampleFormControlInput1" className="form-label">SINIFI</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: 1-B"
                                value={studentClass}
                                onChange={(event)=>setStudentClass(event.target.value)}
                            /></div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3"><label for="exampleFormControlInput1" className="form-label">OKULU</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: ORHANBEY İ.Ö.O."
                                value={schoolName}
                                onChange={(event)=>setSchoolName(event.target.value)}
                            /></div>
                    </div>
                    <div className="d-flex justify-content-fisrt mt-5">
                        <button typ="submit" className="btn btn-outline-primary w-25 ">KAYDET</button>
                    </div>

                </form>


            </div>



        </div>
    )
}

export default AddStudent