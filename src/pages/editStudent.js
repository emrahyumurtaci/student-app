import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";
import { useEffect } from "react";




const EditStudent=()=>{

    const params=useParams()
    const navigate=useNavigate()



    const [editStudent,setEditStudent]=useState("")
    const [editStudentNo,setEditStudentNo]=useState("")
    const [editName,setEditName]=useState("")
    const [editSurname,setEditSurname]=useState("")
    const [editStudentClass,setEditStudentClass]=useState("")
    const [editSchoolName,setEditSchoolName]=useState("")


    useEffect(() => {
        axios.get(`http://localhost:3004/students/${params.studentId}`)
            .then((res) => {
                setEditStudent(res.data)
                setEditStudentNo(res.data.studentNo)
                setEditName(res.data.name)
                setEditSurname(res.data.surname)
                setEditStudentClass(res.data.studentClass)
                setEditSchoolName(res.data.schoolName)
            })
            .catch((err) => {
                console.log(err)
                alert("veri tabanıdan bilgiler gelmiyor sistem yöneticisine bildirin.")
                navigate("/")
            })
    }, [])

    if(editStudent===null){
        return
    }
    const handleEditSubmit=(event)=>{
        event.preventDefault();

        if(editStudentNo==="" || editName==="" || editSurname==="" || editStudentClass===""|| editSchoolName==="" ){
            alert("lütfen tüm alanları doldurunuz")
            return
        }
        const updateStudent={
            id:editStudent.id,
            name:editName,
            surname:editSurname,
            studentNo:editStudentNo,
            studentClass:editStudentClass,
            schoolName:editSchoolName

        }

        axios.put(`http://localhost:3004/students/${editStudent.id}`,updateStudent)
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
            alert("güncelleme esnasında bir hata oluştu.")
        })

    }

    if (editStudent===null){
        return
    }
    return (
        <div>
            <Header />
            <h1>edit student</h1>
            <div className="container mt-5 ">
                <form onSubmit={handleEditSubmit}>
                    <div className="mb-3 row">
                        <div className="col-12 col-sm-3">
                            <label for="exampleFormControlInput1" className="form-label">ÖĞRENCİ NUMARASI</label></div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="number"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="ÖRN: 1111"
                                value={editStudentNo}
                                onChange={(event)=>setEditStudentNo(event.target.value)}
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
                                value={editName}
                                onChange={(event)=>setEditName(event.target.value)}
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
                                value={editSurname}
                                onChange={(event)=>setEditSurname(event.target.value)}
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
                                value={editStudentClass}
                                onChange={(event)=>setEditStudentClass(event.target.value)}
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
                                value={editSchoolName}
                                onChange={(event)=>setEditSchoolName(event.target.value)}
                            /></div>
                    </div>
                    <div className="d-flex justify-content-fisrt mt-5 gap-3">

                        <button typ="submit" className="btn btn-outline-primary w-25  ">SAVE</button>
                        <button onClick={()=>navigate("/")} typ="button" className="btn btn-outline-danger w-25 ">CANCEL</button>
                    </div>

                </form>


            </div>
        </div>
    )
}
    




export default EditStudent