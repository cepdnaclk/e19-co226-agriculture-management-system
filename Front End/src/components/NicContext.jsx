import { createContext, useContext, useState, useEffect } from 'react';

const NicContext = createContext();

export function useNic() {
    return useContext(NicContext);
}

export function NicProvider({ children }) {
    const [nic, setNic] = useState('');

    // Load NIC from localStorage on component mount
    useEffect(() => {
        const storedNic = localStorage.getItem('farmerNIC');
        if (storedNic) {
            setNic(storedNic);
        }
    }, []);

    // Store NIC in localStorage whenever it changes
    useEffect(() => {
        if (nic) {
            localStorage.setItem('farmerNIC', nic);
        }
    }, [nic]);

    // Function to clear the stored NIC
    const clearNic = () => {
        localStorage.removeItem('farmerNIC');
        setNic('');
    };

    return (
        <NicContext.Provider value={{ nic, setNic, clearNic }}>
            {children}
        </NicContext.Provider>
    );
}
