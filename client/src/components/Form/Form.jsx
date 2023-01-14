import React, {useState} from 'react';

const Form = ({handler}) => {
    let [newObj, setObj] = useState({name: "", price: ""});
    function formHandler (event){
        handler(event, newObj);
        setObj({name: "", price: ""});
    };
    return (
        <form className="mt-5">
            <input value={newObj.name} onChange={event => setObj({...newObj, name: event.target.value})}
                   className="form-control form-control-white mb-3"
                   placeholder="Name" aria-label="Search"/>
            <input value={newObj.price} onChange={event => setObj({...newObj, price: event.target.value})}
                   className="form-control form-control-white mb-3"
                   placeholder="Price" aria-label="Search"/>
            <button className="btn btn-outline-secondary btn-lg px-4" type={"submit"}
                    onClick={event => formHandler(event)}>
                Send
            </button>
        </form>
    );
};

export default Form;