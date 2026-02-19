import { useState } from 'react';

function CalendarCell({onClick, day, time}){

    const [isActive, setIsActive] = useState(false);

    const buttonNames = ["left", "right", "wheel", "back", "forward"];
    function mouseButtonPressed(event, buttonName) {
        
        return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
    }

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const style = {
        backgroundColor: day.time.includes(time) != false ? 'lightGray' : 'white'
    }

    return (
        <>
            <div id="cell" style={style} onContextMenu={e => {e.preventDefault();}} 
                onMouseOver={e => 
                    {if(mouseButtonPressed(e, "left")) 
                        {e.preventDefault(); handleClick(); onClick(time, day.name, true)} 
                    else if(mouseButtonPressed(e, "right")) 
                        {e.preventDefault(); handleClick(); onClick(time, day.name, false)} }
                } 
                onMouseDown={e => 
                    {if(mouseButtonPressed(e, "left")) 
                        {e.preventDefault(); handleClick(); onClick(time, day.name, true)} 
                    else if(mouseButtonPressed(e, "right")) 
                        {e.preventDefault(); handleClick(); onClick(time, day.name, false)} }
                }   
            ></div>
        </>
    )
}

export default CalendarCell;