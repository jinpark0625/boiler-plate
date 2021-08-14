import React, {useState} from "react";
import styles from "./login.module.css"
import FetchLogin from "../fetchLogin/fetchLogin";

const Login = ({})=>{
    const [account, setAccount]= useState({
        id: "",
        password : "",
    });


    const onChangeAccount = (e) => {
      setAccount({
        ...account,
        [e.target.name]: e.target.value,
      });
    };

    const onSubmitAccount = async () => {
        try {
          const user = await FetchLogin(account);
            console.log("성공")
        } catch (error) {
          window.alert(error);
        }
      };

    return(
        <section className={styles.container}> 
            <input type="text" placeholder="아이디를 입력해주세요" name="id" className={styles.input} onChange={onChangeAccount}/>
            <input type="text" placeholder="비밀번호를 입력해주세요" name="password" className={styles.input} onChange={onChangeAccount}/>
            <button className={styles.btn} onClick={onSubmitAccount}>로그인</button>
        </section>
    )
}

export default Login;