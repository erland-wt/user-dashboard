import UserItem from './UserItem';

function UserList({ users }) {
    if (users.length === 0) {
        return <p className='msg-noUser'>No users found.</p>;
    }

    return (
        <ul>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default UserList;