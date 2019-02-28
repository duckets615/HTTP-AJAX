import React from 'react';

const AddFriend = (props) => {
    return (
    <form onSubmit={(event) => props.addFriend(event, props)} className = "add-friend">
        <input onChange={props.formChange} className="name" name="name" placeholder="name"/>
        <input onChange={props.formChange} className="age" name="age" placeholder="age"/>
        <input onChange={props.formChange} className="email" name="email" placeholder="email"/>
        <button>Add Friend</button>
    </form>
    )
}

export default AddFriend;
