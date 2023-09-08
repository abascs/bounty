
import style from './sendm.module.css'
import Link from 'next/link'

export default async function login() {
  
  
  return (
    <div  className=" bg-slate-100 w-full h-screen flex justify-center items-center">
      <form className={style.form}>
    <div className={style.header}>Sign In</div>
    <div className={style.inputs}>
        <input  placeholder="Email" className={style.input} type="text"/>
        <input  placeholder="Password" className={style.input} type="password"/>
    <div className={style.checkboxcontainer}>
        <label className={style.checkbox}>
        <input type="checkbox" id="checkbox"/>
        </label>
        <label htmlFor="checkbox" className={style.checkboxtext}>Remember me</label>
    </div>
    <button  className={style.siginbtn}>Submit</button>
    <a className={style.forget} href="#">Forget password ?</a>
    <p className={style.signuplink}>Don't have an account? <Link href="/register">Sign up</Link></p>
    </div>
</form>

    </div>
  )
}

