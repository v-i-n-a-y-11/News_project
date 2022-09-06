import React from 'react'
import Spinner from './Spinner.gif'
const BufferingSpinner = (props) => {

    return (
        <div className={`text-center `}>
            <img className={`my-3 `} src={Spinner} alt="Loading News" />
        </div>
    )

}

export default BufferingSpinner
