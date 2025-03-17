import { useState } from "react";


const rootUrl = "https://localhost:5000";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {email, password};
        console.log(user)
        if(!email || !password) return "Email and password failed";
        
        try {
            const url = `${rootUrl}/api/v1/auth/login`;
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(user),
            });
            setPassword('');
            setEmail('');
        } catch (error) {
            console.log({err:  error, msg: "||Issue found in handleSubmit||"})

        }

    };

    const fetchTesting = async() => {
        const url = `${rootUrl}/api/v1`;
        await fetch(url)
    };
    const fetchLogout = async() => {
        const url = `${rootUrl}/api/v1/logout`;
        await fetch(url)
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Login Form</h4>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                    type="email"
                    className="form-input email-input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                     type="password"
                     className="form-input password-input"
                     name="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      />
                </div>
                <button type="submit" className="btn btn-block submit-btn">Submit</button>

            </form>
            <div className="container">
                <button  className="btn testing-btn" onClick={fetchTesting}>Testing</button>
                <button className="btn logout-btn" onClick={fetchLogout}>Logout</button>
            </div>
            
        </>
    );

}

export default App;





