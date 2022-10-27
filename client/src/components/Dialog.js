import './styles.css';
import { useEffect, useState } from "react";

export const Dialog = ({ visiable, event, onSubmit, closeDialog }) => {
    const [currentEvent, setCurrentEvent] = useState(event);
    useEffect(()=>setCurrentEvent(event),[event]);

    const handelTitelChange = (e) => {
        setCurrentEvent({ ...currentEvent, title: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(currentEvent);
    }

    return (
        <div className={visiable ? "dialog" : "hide"}>
            <form className="form">
                <div>
                    <label className="label" >Event</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Add title"
                        value={currentEvent?.title}
                        onChange={handelTitelChange} />
                </div>
                <div className="buttonContainer">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={(e)=>closeDialog(e)}>Close</button>

                </div>
            </form>
        </div>
    )
}