const Acordian = ({ title, description }) => {
  return (
    <div className=" w-full">
      <div className="collapse collapse-arrow join-item border-base-300 ">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">{title}</div>
        <div className="collapse-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Acordian;
