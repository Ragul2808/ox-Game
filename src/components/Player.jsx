import { useState } from "react"



export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);

    }
    let playerName =  <span className="player-name">{name}</span>;
    // let btncaption = 'Edit'

    if (isEditing) {
        playerName = <input type="text" required value={name} />;
        // let btncaption = 'save'
    }
    return (
        <li>
           <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit' }</button>
           </span>
          </li>
    )
}