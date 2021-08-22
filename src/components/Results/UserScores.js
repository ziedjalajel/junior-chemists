const UserScores = ({ user }) => {
  if (user.score !== null) console.log(user);
  return (
    <>
      {user.score !== null && (
        <>
          <h3>
            {user.username} : {user.score}
          </h3>
        </>
      )}
    </>
  );
};

export default UserScores;
