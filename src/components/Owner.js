const Owner = ({ url, username }) => {
  return (
    <div className="ownerInfo">
      <img className="imgAvatar" src={url} alt="avatar" />
      <p>{username}</p>
    </div>
  );
};

export default Owner;
