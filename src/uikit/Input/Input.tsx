import React from 'react'

function Input() {
    return (
        <div className="input">
            <div className="input__container">
                <label >
                    Email address
                    <input type="text" placeholder="Email"  />
                </label>
            </div>
        </div>
    )
}

export default Input
