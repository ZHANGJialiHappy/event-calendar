import './styles.css';
import { useState } from "react";


export const Dialog = ({ visiable, event, onSubmit }) => {

    console.log(event);

    // {
    //     "id": 0,
    //     "title": "All Day Event very long title",
    //     "start": "2022-10-18T22:00:00.000Z",
    //     "end": "2022-10-19T22:00:00.000Z"
    //   }

    const [currentEvent, setCurrentEvent] = useState(event);


    const handelTitelChange = (e) => {
        setCurrentEvent({ ...currentEvent, title: e.target.value });
    }

    const handleSubmit = () => {
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
                </div>
            </form>
        </div>
    )
}