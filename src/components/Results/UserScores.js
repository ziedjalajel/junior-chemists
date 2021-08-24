const UserScores = ({ user }) => {
  return (
    <>
      {user.score !== null && (
        <>
          <div className="relative">
            <h3>{user.username} :</h3>
            <h3 className="points">{user.score} Points</h3>
          </div>
        </>
      )}
    </>
  );
};

export default UserScores;
