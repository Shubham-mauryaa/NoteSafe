import React from 'react'
import Notes from './Notes'

const Userdata = (props) => {
    const { showAlert } = props;
    return (
        <div>
            <Notes showAlert={showAlert} />
        </div>
    )
}

export default Userdata
