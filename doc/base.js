const { default: useReferNavigate } = _UseReferNavigate;

const BaseExample = () => {
  const navigate = useReferNavigate();

  const handleClick = () => {
    // 会自动携带 referer 参数
    navigate('/target-page');
  };

  return <button onClick={handleClick}>Go to Target</button>;
};

render(<BaseExample />);
