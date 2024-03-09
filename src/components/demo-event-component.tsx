import React, { SyntheticEvent, useState } from 'react';


interface MyProps {
}


const DemoEventComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [demoNumberState, setDemoNumberState] = useState(0);


    const myEventFunction = (synthEvent: SyntheticEvent) => {
        //you can put whatever complex logic you want in here.

        /*
            SythenticEvent is a generic type of Event object that React gives you;
            you don't have to include the event parameter, but if you need
            metadata regarding then opting into the event object may be a good idea.
            If you need more specific metadata about the event then you
            may want to choose a more specific event datatype; there are lots of them,
            for example, MouseEvent, KeyboardEvent, FormEvent, ChangeEvent, etc.
        */


        if (demoNumberState >= 3)
            setDemoNumberState(-3);
        else
            setDemoNumberState(demoNumberState + 1);
    }

    return (
        <React.Fragment>
            <h4>Demo Event Component</h4>

            {/* Here is an example of you create events in React. */}
            
            <p>This button will cause Demo Value to count up until it hits 3, then it will loop the value back around to -3, repeat.</p>
            <p>Demo Value: {demoNumberState}</p>

            {/* Notice how the function doesn't have parenthesis at the end,
            you're referencing a function, not invoking it. */}
            <button onClick={myEventFunction}>Demo Event Button</button>

        </React.Fragment>
    );
}

export default DemoEventComponent;