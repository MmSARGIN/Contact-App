import {useState} from 'react'

export function  List({contacts}) {
    const[filterText, setfilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
         return   item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
        })
    })
    console.log(filtered);
    return (
        <div>
            <input placeholder="Filter Contact" value={filterText} onChange={(e) =>setfilterText(e.target.value)}/>
           <ul className="list">
               {
                   filtered.map((contact, i)=><li key={i}><span>{contact.fullName}</span>
                   <span>{contact.phoneNumber}</span>
                   </li> )
               }
           </ul>
           <p>Total Contacts({filtered.length})</p>
        </div>
    )
}
