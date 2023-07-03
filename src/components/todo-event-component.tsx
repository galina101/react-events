import React, { SyntheticEvent, useState } from 'react';


interface MyProps {
}


const TodoEventComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [todoNumberState, setTodoNumberState] = useState(0);



    return (
        <React.Fragment>
            <h4>Todo Event Component</h4>

            {/* TODO */}
            <p>TODO: create an event on the button that alters the value of "todoNumberState". If the value of todoNumberState is 0 then the button
            should add 1; if the value is greater than 0 then the button should double the value of todoNumberState.</p>

            <p>Todo Value: {todoNumberState}</p>
            
            <button >Todo Event Button</button>

        </React.Fragment>
    );
}

export default TodoEventComponent;