function UserItem({ user }) {
    return (
        <li>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
        </li>
    );
}

export default UserItem;