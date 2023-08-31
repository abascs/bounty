import style from './sendm.module.css'
import Link from 'next/link'
export default function login() {
  return (
    <div className=" bg-slate-100 w-full h-screen flex justify-center items-center">
      <form className={style.form}>
    <div className={style.header}>Sign up</div>
    <div className={style.inputs}>
        <input placeholder="Name" className={style.input} type="text"/>
        <input placeholder="Email" className={style.input} type="text"/>
        <input placeholder="Password" className={style.input} type="password"/>
    <div className={style.checkboxcontainer}>
        <label className={style.checkbox}>
        <input type="checkbox" id="checkbox"/>
        </label>
        <label htmlFor="checkbox" className={style.checkboxtext}>Remember me</label>
    </div>
    <button className={style.siginbtn}>Submit</button>
    <p className={style.signuplink}>Do you have an account? <Link href="/login">login</Link></p>
    </div>
</form>
    </div>
  )
}

