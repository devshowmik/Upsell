import { useEffect, useState } from 'react';

const useUserRole = email => {
    const [userRole, setUserRole] = useState(null);
    const [loadingRole, setLoadingRole] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setUserRole(data.userRole);
                    setLoadingRole(false)
                })
        }
    }, [email])
    return [userRole, loadingRole]
};

export default useUserRole;