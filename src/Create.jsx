import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Create = (props)=>{
    const [input, setInput] = useState({
        title:'',
        content:'',
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setInput((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        });
        console.log(input);
    }
    const addEvent = ()=>{
        props.passnote(input);
        setInput({
            title:'',
            content:'',
        });
    }
    return(
        <>
            <div className='main_note'>
                <form>
                    <input type='text' name="title" value={input.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/>
                    <textarea type='text' name='content' value={input.content} onChange={InputEvent} column='' row='' placeholder='Writing a note...' />
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign'/>
                    </Button>
                </form>
            </div>
        </>
    );
} 
export default Create;