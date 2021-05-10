import React from 'react'
import Button from 'react-bootstrap/Button'


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=347b0f2b2e054d2b996f5c03aa72bf8f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return (
        <div>
            <Button variant="outline-dark">
                Login
            </Button>
        </div>
    )
}
