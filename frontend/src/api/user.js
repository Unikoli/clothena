const userProfile = async () => {
    const token =localStorage.getItem('login-token')
    try {
        const res = await fetch(`${config.backendURL}/api/auth/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const data=await res.json();
        if(res.ok)
        {
            console.log(data);
            return data;
        }

    } catch (error) {

    }
}

export default userProfile;