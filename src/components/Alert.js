// import React from 'react'

// const Alert = (props) => {
//     return (
//         <div className='al'>
//             {props.alert && <div className={`alert alert-${ props.alert.type } alert-dismissible fade show`} role="alert">
//                 <strong>{(props.alert.type)}</strong> : {props.alert.msg}
//             </div>}
//         </div>

//     )
// }

// export default Alert

import React from 'react';
import '../Alert.css';

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`custom-alert custom-alert-${alert.type}`}>
        {alert.msg}
      </div>
    )
  );
}

export default Alert;



