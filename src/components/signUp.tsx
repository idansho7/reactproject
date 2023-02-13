import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SiteTheme } from "../App";
import User from "../interfaces/user";
import { errorMsg } from "../services/feedbacks";
import { AddUser } from "../services/userService";

interface SignUpProps {

}

const SignUp: FunctionComponent<SignUpProps> = () => {
    let nav = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            isBusiness: false
        },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values: User) => {
            AddUser(values)
                .then(() => { nav("/signin") })
                .catch((err) => errorMsg(`${err} allready used`));
        }
    })
    const theme = useContext(SiteTheme);
    return <>
        <div style={{ color: theme.color, background: theme.background }} className="darkM">
            <div style={{ height: "86vh", marginRight: "0" }} className="row">
                <div style={{ padding: "50px" }} className="container col-md-4 mt-5">
                    <h1 className="display-4 text-center" >SIGN UP</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="example@test.com"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label style={{ color: "#161616" }} htmlFor="floatingInput">Email</label>
                            {formik.touched.email && formik.errors.email && (
                                <small className="text-danger">{formik.errors.email}</small>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="example@test.com"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label style={{ color: "#161616" }} htmlFor="floatingInput">Name</label>
                            {formik.touched.name && formik.errors.name && (
                                <small className="text-danger">{formik.errors.name}</small>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingInput"
                                placeholder="example@test.com"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label style={{ color: "#161616" }} htmlFor="floatingInput">password</label>
                            {formik.touched.password && formik.errors.password && (
                                <small className="text-danger">{formik.errors.password}</small>
                            )}
                        </div>
                        <div className="text-center mb-3">
                            <Link to="/signin">Allready have an user? Click here!</Link>
                        </div>

                        <button style={{ color: theme.color, background: theme.btn }} type="submit" className="btn btn-primary w-100" disabled={!formik.dirty || !formik.isValid}>Sign up</button>
                    </form>
                </div>

                <div style={{ padding: "0" }} id="pic" className="col-md-7">
                    <img style={{ height: "100%" }} className="w-100" src="https://t4.ftcdn.net/jpg/01/81/76/03/360_F_181760332_3mg460ZJZSF842wGnu9Ep4Z93KVGW4JP.jpg" alt="" />
                </div>

            </div>
        </div>
    </>
}

export default SignUp;