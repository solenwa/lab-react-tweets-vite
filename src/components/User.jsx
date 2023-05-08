function User({userdata}) {
    return (
    <span className="user">
        <span className="name">{userdata.name}</span>
        <span className="handle">{userdata.handle}</span>
      </span>
    );
}

export default User;