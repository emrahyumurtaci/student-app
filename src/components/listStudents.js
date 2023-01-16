import React from "react";

const ListStudents = ({ students }) => {


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
                    {
                        students.map((student,index) => (
                            <tr key={student.id}>
                                <th scope="row">{index+1}</th>
                                <td>{student.studentNo}</td>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.studentClass}</td>
                                <td>{student.schoolName}</td>
                            </tr>
                        ))                
                    }
                    

                </tbody>
            </table>



        </div>
    )


}
export default ListStudents