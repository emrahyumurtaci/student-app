import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ListStudents = ({ students, setStudents }) => {


    const deleteStudent = (student) => {
        if (window.confirm("kayıtlı öğrenciyi silmek istediğinize emin misiniz?") == true) {

            axios.delete(`http://localhost:3004/students/${student.id}`)
                .then((res) => {
                    const filterStudents = students.filter(
                        (item) => item.id !== student.id
                    );
                    setStudents(filterStudents);
                })
                .catch((err) => {
                    alert("silme işlemi esnasında bir hata oluştu")

                })


        }





    }

    return (
        <div className="container">

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">SIRA NO</th>
                        <th scope="col">ÖĞRENCİ NO</th>
                        <th scope="col">ADI</th>
                        <th scope="col">SOYADI</th>
                        <th scope="col">SINIFI</th>
                        <th scope="col">OKUL ADI</th>
                    </tr>
                </thead>
                <tbody>

                    {students.length === 0 ? (
                        <tr>
                            <td className="text-center" colSpan={"7"}>Kayıtlı öğrenci yok</td>
                        </tr>
                    ) : (
                        <>
                            {
                                students.map((student, index) => (
                                    <tr key={student.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{student.studentNo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.surname}</td>
                                        <td>{student.studentClass}</td>
                                        <td>{student.schoolName}</td>
                                        <td>
                                            <button onClick={() => deleteStudent(student)} className="btn btn-sm btn-outline-danger me-2">DELETE</button>
                                            <Link to={`/EditStudent/${student.id}`} className="btn btn-sm btn-outline-warning">EDIT</Link >
                                        </td>
                                    </tr>
                                ))
                            }
                        </>




                    )}





                </tbody>
            </table>



        </div>
    )


}
export default ListStudents