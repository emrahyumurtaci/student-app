import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import ListStudents from "../components/listStudents";




const Home = () => {

    const [students, setStudents] = useState(null)
    
    const navigate=useNavigate(null)
    

    useEffect(() => {
        axios.get("http://localhost:3004/students")
            .then((res) => {
                setStudents(res.data)
            })
            .catch((err) => {
                alert("veri tabanıdan bilgiler gelmiyor sistem yöneticisine bildirin.")
            })
    }, [])

        if (students===null){
            return(
                <div>
                    <h1>LOADİNG...</h1>
                </div>
            )
        }
    return (
        <div >
            <Header />
            <div className="container mt-5 d-flex justify-content-end">
            <button onClick={()=>navigate("/AddStudent")} className="btn btn-primary">ÖĞRENCİ EKLE</button>
            </div>
            <ListStudents students={students} setStudents={setStudents}/>
        </div>
    ) 
}

export default Home