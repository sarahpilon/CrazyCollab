import { useState } from 'react';

function CalendarCell({onClick, day, time}){

    const [weight, setWeight] = useState(0);

    const buttonNames = ["left", "right", "wheel", "back", "forward"];
    function mouseButtonPressed(event, buttonName) {
        
        return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
    }

    const calcStyle = () => {
        
        let weight = 0;
        day.time.forEach(element => {
            if (element == time){
                weight += 1;
            }
        });

        if (weight == 0){
            return '#ffffff'
        } else if (weight == 1){
            return '#aab0c0'
        } else if (weight == 2) {
            return '#7c8499'
        } else if (weight == 3) {
            return '#5b606e'
        }

    }

    const style = {
        
        backgroundColor: calcStyle() // day.time.includes(time) != false ? 'lightGray' : 'white'
    }

    return (
        <>
            <div id="cell" style={style} onContextMenu={e => {e.preventDefault();}} 
                onMouseOver={e => 
                    {if(mouseButtonPressed(e, "left")) 
                        {e.preventDefault(); onClick(time, day.name, true)} 
                    else if(mouseButtonPressed(e, "right")) 
                        {e.preventDefault(); onClick(time, day.name, false)} }
                } 
                onMouseDown={e => 
                    {if(mouseButtonPressed(e, "left")) 
                        {e.preventDefault(); onClick(time, day.name, true)} 
                    else if(mouseButtonPressed(e, "right")) 
                        {e.preventDefault(); onClick(time, day.name, false)} }
                }   
            ></div>
        </>
    )
}

export default CalendarCell;