import React, { useState } from 'react'


export default function Login(props) {

    let [state, setState] = useState({
        values: {
            taiKhoan: '',
            matKhau: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: ''
        }
    })

    console.log(state);
    const handleSubmit = (e) => {
        e.preventDefaut();
    }

    const handleChange = (e) => {
        let { value, name } = e.target;

        let newValue = {
            ...state.values,
            [name]:value
        }
        //Xử lý change lỗi
        let newError = {
            ...state.errors,
            [name]: value ===''? `${name} không được bỏ trống` : ''   
        }
        //Cập nhật lại state của values và errors
        setState({
            values: newValue,
            errors:newError
        })
    }
    console.log(state)
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="display-4">ĐĂNG NHẬP</div>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handleChange} />
                <p className="text-danger">{state.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={handleChange} />
                <p className="text-danger">{state.errors.matKhau}</p>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    )
}
