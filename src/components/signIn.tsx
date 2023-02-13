import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SiteTheme } from "../App";
import User from "../interfaces/user";
import { getCardListById } from "../services/cardList";
import { errorMsg, successMsg } from "../services/feedbacks";
import { setLog } from "../services/log";
import { checkUser } from "../services/userService";


interface SignInProps {
    setLogged: Function
    setBis: Function
    setQuan: Function
    quan: number
}

const SignIn: FunctionComponent<SignInProps> = ({ setLogged, setBis, setQuan, quan }) => {
    let nav = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values: User) => {
            checkUser(values)
                .then((res) => {
                    if (res.data.length) {
                        if (res.data[0].isBusiness) {
                            getCardListById(res.data[0].id).then((res1) => {
                                setQuan(res1.data.quantity); localStorage.setItem("quantity", `${res1.data.quantity}`); setLog(true, res.data[0].isBusiness, res1.data.quantity).then(() => {

                                    successMsg("Logged in succesfuly!");
                                    localStorage.setItem("isLogged", JSON.stringify({ 'logged': 'true', 'isBis': `${res.data[0].isBusiness}` }));
                                    localStorage.setItem("userId", `${res.data[0].id}`);
                                    setLogged(true);
                                    setBis(res.data[0].isBusiness);
                                    nav("/");

                                }).catch((err) => console.log(err));
                            }).catch((err) => console.log(err));
                        } else {
                            successMsg("Logged in succesfuly!");
                            localStorage.setItem("isLogged", JSON.stringify({ 'logged': 'true', 'isBis': `${res.data[0].isBusiness}` }));
                            localStorage.setItem("userId", `${res.data[0].id}`);
                            setLogged(true);
                            setLog(true, false, 0).catch((err) => console.log(err));
                            setBis(res.data[0].isBusiness);
                            nav("/");

                        }



                    } else {
                        errorMsg("Invalid Email Or Password");
                    }
                })
                .catch((err) => console.log(err));
        }
    })
    const theme = useContext(SiteTheme);
    return <>
        <div style={{ color: theme.color, background: theme.background }} className="darkM">
            <div style={{ height: "86vh", marginRight: "0" }} className="row">
                <div style={{ padding: "50px" }} className="container col-md-4 mt-5">
                    <h1 className="display-4 text-center" >SIGN IN</h1>
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
                            <Link to="/signup">New user? Click here!</Link>
                        </div>
                        <button style={{ color: theme.color, background: theme.btn }} type="submit" className="btn w-100" disabled={!formik.dirty || !formik.isValid}>Sign in</button>
                    </form>
                </div>

                <div style={{ padding: "0" }} id="pic" className="col-md-7">
                    <img style={{ height: "100%" }} className="w-100" src="https://t3.ftcdn.net/jpg/01/45/41/88/360_F_145418816_TWSVRp1MgFfAtpZI8o8b0ek2PVLMCNcW.jpg" alt="" />
                </div>

            </div>
        </div>
    </>
}

export default SignIn;