import './styles.css';

export const Dialog = ({ visiable }) => {
    return <div className={visiable ? "dialog" : "hide"}>
        <form className='form'>
            <h2>Event</h2>
            {/* <div>
        <input className="input" type = "text"  placeholder = "Add title" required {...register("email")}/>
        <p className="validationMessage">{errors.email?.message}</p>
        </div> */}
        </form>
    </div>
}