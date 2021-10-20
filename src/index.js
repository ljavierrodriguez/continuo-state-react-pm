import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = prop => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("Debe ingresar nombre");
    const [students, setStudents] = useState(["Jairo", "Patricia", "Jesus", "Michelle", "Martina", "Eliana"]);
    const [search, setSearch] = useState("");
    return (
        <>
            <h1>Datos</h1>

            {name === "" && (
                <>
                    <span>{"Msg" + message}</span><br />
                </>
            )}

            <input type="text" name="name" id="name" placeholder="Insert name"
                value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />

            {
                name !== "" ? (
                    <h1>Bienvenido, {name}</h1>
                ) : (
                    <h1>Por favor dime tu nombre!</h1>
                )
            }
            <input type="text" id="search" name="search" 
            placeholder="Search" value={search} 
            onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {
                    //(students !== null && students !== undefined) &&
                    //students &&
                    //!!students &&
                    //students.length > 0 &&
                    students.filter((valor) => {
                        return valor.toLowerCase().includes(search.toLowerCase())
                    }).map((valor, indice) => {
                        return (
                            <li key={indice}>{valor}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));