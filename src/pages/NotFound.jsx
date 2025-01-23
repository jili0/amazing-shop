const NotFound = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
  return (
    <div>
      <p>Sorry! Page is not found.</p>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default NotFound;
