import {useState} from 'react'

const initialFormValues = {fullName:"", phoneNumber:""}

export function Form({addContacts, contacts}) {
    
    const [form, setForm] = useState(initialFormValues)

const onchangeInput = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
}
const onSubmit = (e)=> {
    e.preventDefault()
    if (form.fullName === "" || form.phoneNumber === "")  {
        return false
    }
    addContacts([...contacts, form])
 setForm(initialFormValues)
}
    return (
        <form onClick={onSubmit}>
            <div>
                <input name="fullName" value={form.fullName} placeholder="Full Name" onChange={onchangeInput}/>
            </div>
            <div>
                <input name="phoneNumber" value={form.phoneNumber} placeholder="Phone Number" onChange={onchangeInput}/>
            </div>
            <div>
                <button >Add</button>
            </div>
        </form>



    )
}
