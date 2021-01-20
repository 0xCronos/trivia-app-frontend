import React, { useContext } from 'react'

// components
import { Portal } from '../components/Portal/'
import { UserContext } from '../components/UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)

    return (
        <div className="page">
            {user.id === undefined ?
                <Portal />
            :
                null
            }
            {/* 
            <hr />

            <pre className="container">
                { JSON.stringify(user, null, 3)}
            </pre> */}

            <h1>Home page!</h1>
        </div>
    )
}