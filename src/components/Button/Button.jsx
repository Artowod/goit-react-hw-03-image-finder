const Button = () => {
  const clickHandler = event => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" onClick={clickHandler}>
      Load more
    </button>
  );
};

export default Button;
