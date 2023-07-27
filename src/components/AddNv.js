import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddNv(props) {
    const [input, setInput] = useState({});
    const { id } = useParams();
    const nav=useNavigate();//điều hướng
    const handleChange = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        if (e.target.type == "checkbox")
            value = e.target.checked;

        setInput({ ...input, [id]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if (id != null) {
            let url = "https://64bfca600d8e251fd1116f33.mockapi.io/truongpa/nhanvien/" + id;
            axios.put(url, input)
                .then(res => { alert("Cập nhật thành công");loadnv();nav("/home"); })
                .catch(err => { console.log("Lỗi: " + err) });
            
        }
        else {
            let url = "https://64bfca600d8e251fd1116f33.mockapi.io/truongpa/nhanvien";
            axios.post(url, input)
                .then(res => { alert("Thêm mới thành công");loadnv(); nav("/home");})
                .catch(err => { console.log("Lỗi: " + err) });
                
        }

    }

    const loadnv = () => {
        if (id != null) {
            console.log("Load Detail");
            let url = "https://64bfca600d8e251fd1116f33.mockapi.io/truongpa/nhanvien/" + id;
            axios.get(url)
                .then(res => setInput(res.data))
                .catch(err => { console.log("Lỗi: " + err) });
        }
    }
    useEffect(loadnv, []);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>ID nhân viên</td>
                        <td><input type="number" id="idnv" value={input.idnv} required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>ID phòng ban</td>
                        <td><input type="number" id="idpbnv" value={input.idpbnv} required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Tên nhân viên</td>
                        <td><input type="text" id="ten" value={input.ten} required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>SĐT</td>
                        <td><input type="number" id="sdt" value={input.sdt} required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Trạng thái</td>
                        <td><input type="checkbox" id="trangthai" checked={input.trangthai} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Địa chỉ</td>
                        <td><input type="text" id="diachi" value={input.diachi} required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default AddNv;
