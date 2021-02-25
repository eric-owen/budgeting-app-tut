import React from 'react';
const editExpensePage = (props) => {

    return (
        <div>
            edit expense of id {props.match.params.id}
        </div>
    )
}

export default editExpensePage