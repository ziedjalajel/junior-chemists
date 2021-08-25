const Username = ({ user, username }) => {
  return (
    <>
      {username === user ? (
        <p className="me">{user}</p>
      ) : (
        <p className="you">{user}</p>
      )}
    </>
  );
};

export default Username;
