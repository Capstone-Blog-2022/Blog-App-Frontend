import React from 'react';

class Login {
    render() {

        return (
            <div>
                <form>

                    <input type="text" name="username"></input>
                    <input type="text" name='password'></input>

                    {/* make a button for the onClick to render webpage */}
                    <button onClick={() => { console.log('Let me in!') }}>Log In</button>
                </form>

            </div>
        )
    }
}