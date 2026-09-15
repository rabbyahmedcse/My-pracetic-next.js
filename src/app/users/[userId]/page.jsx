import { userAgent } from "next/server";


const UserDetailPage = async ({params}) => {
    const {userId}=await params;
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
   const user = await res.json(); 
   return (
        <div>
            <h2>User details  {user.name} </h2>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserDetailPage;