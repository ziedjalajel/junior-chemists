const UserScores = ({ user }) => {
  console.log("user :", user);

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
