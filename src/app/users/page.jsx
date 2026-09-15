import Link from "next/link";

const Userpage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return (
        <div>
            <h2>Total user {users.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    users.map(user => <div key={user.id} className="card bg-primary text-primary-content mb-1">
                        <div className="card-body">
                          <h2 className="card-title">{user.name}</h2>
                          <p>{user.email}</p>
                          <div className="card-actions justify-end">
                           <Link href={`/users/${user.id}`}> 
                           <button className="btn">Show more</button>
                           </Link>
                          </div>
                        </div>
                      </div>)
                }
            </div>

        </div>
    );
};

export default Userpage;