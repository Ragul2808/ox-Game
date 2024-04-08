import { useState } from "react"



export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);; // => sechduels a state update to true
       
    }
    function handlechange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = (
        <span className="player-name">
            <input type="text" value={playerName} onChange={handlechange} />
        </span>
    );
    

    if (isEditing) {
        editablePlayerName = (
          <input type="text" required value={playerName} />
          // let btncaption = 'save'
        );
    }
    return (
        <li>
           <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit' }</button>
           </span>
          </li>
    )
}