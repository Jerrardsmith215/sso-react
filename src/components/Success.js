import React, { useContext } from 'react'
import { AuthContext } from './auth/AuthProvider';

function Success() {
    const auth = useContext(AuthContext);
    const isAuthenticated = auth.currentUser ? true : false;

    if (isAuthenticated) {
        return (
            <div className="container text-center p-5">
                <p>Whose woods these are I think I know.</p>
                <p>His house is in the village though;</p>
                <p>He will not see me stopping here</p>
                <p>To watch his woods fill up with snow.</p>

                <br />

                <p>My little horse must think it queer</p>
                <p>To stop without a farmhouse near</p>
                <p>Between the woods and frozen lake</p>
                <p>The darkest evening of the year.</p>

                <br />

                <p>He gives his harness bells a shake</p>
                <p>To ask if there is some mistake.</p>
                <p>The only other sound’s the sweep</p>
                <p>Of easy wind and downy flake.</p>

                <br />

                <p>The woods are lovely, dark and deep,</p>
                <p>But I have promises to keep,</p>
                <p>And miles to go before I sleep,</p>
                <p>And miles to go before I sleep.</p>
            </div>
        )
    }

    else if (!isAuthenticated) {
        return (
            <div>
                <h1>You are not logged in...</h1>
            </div>
        )
    }
}

export default Success;