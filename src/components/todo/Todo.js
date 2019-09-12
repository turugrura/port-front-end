import React from 'react';

const Todo = ({ todo }) => {
    const { author, topic, content, status } = todo;
    
    return (
        <div>
            <h3>{author}</h3>
            <div>{topic}</div>
            <div>{content}</div>
            <p>{status}</p>
        </div>
    );
};

export default Todo;