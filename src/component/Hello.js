import World from "./World";
import styles from'./Hello.module.css'
import { useState } from "react";
import UserName from "./UserName";

const Hello = ({age}) => {
    // let name = 'Mike'
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
    function changeName(){
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        console.log(name);
        // document.getElementById('name').innerText = name;
        setName(newName)
    }
    return(
        <div>
            <h1>state</h1>
            <h2 id='name'>{name}({age}) : {msg} </h2>
            <UserName name={name} />
            {/* <button onClick={changeName; setAge}>Change</button> */}
            <button onClick={() => {changeName(); }}>Change</button>
        </div>

    ); 
}

export default Hello;