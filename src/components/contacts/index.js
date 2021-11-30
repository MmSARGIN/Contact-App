import {useState, useEffect} from 'react'
import { Form } from './form'
import { List } from './list'
import './styles.css'


export function Contacts() {
    const [contacts, setContacts] = useState([{
        fullName: "Melih",
        phoneNumber: 1234
    },
    {
        fullName:"Ayşe",
        phoneNumber:5361
    },
    {
        fullName:"Ömer",
        phoneNumber:7700
    }
    ])

useEffect(() => {
   
}, [contacts])

    return (
        <div id="container">
            <h3>CONTACTS</h3>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}
