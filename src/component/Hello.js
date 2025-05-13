import World from "./World";
import styles from'./Hello.module.css'

const Hello = () => {

    function showName() {
        console.log('Mike');
    }
    function showText(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button 
            onClick={() => {
                    console.log(30);
                }}
            >Show age</button>
        <input type='text' onChange={showText} />
        </div>

    ); 
}

export default Hello;