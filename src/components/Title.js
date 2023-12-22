const Title = ({ title_1, title_2 }) => {
  return (
    <div className="section-title">
      <h2>
        {title_1} <span>{title_2}</span>
      </h2>
    </div>
  );
};
export default Title;
