import { createContext, useState, useEffect } from "react";

export const SocketContext = createContext();
export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [uersOnline, setUsersOnline] = useState([]);
    //authUserContext needed here
    // 4:05;  //2:27 - connect backend with frontend
   
    useEffect(() => {}, []);
    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}