import { useState } from "react";

const ParentComponent = () => {
  const [isSHow, setIsSHow] = useState(false);

  const toggleElement = () => {
    setIsSHow(!isSHow);
  };

  return (
    <div>
      <ChildComponent1 handleClick={toggleElement} />
      <ChildComponent2 isShow={isSHow} />
    </div>
  );
};

const ChildComponent1 = (props) => {
  const { handleClick } = props;
  return (
    <button className="btn" onClick={handleClick}>
      show me
    </button>
  );
};

const ChildComponent2 = (props) => {
  const { isShow } = props;
  
  const isDisplayElement = isShow ? "flex" : "none";

  return (
    <div
      style={{
        display: isDisplayElement,
      }}
    >
      elemnet
    </div>
  );
};

export default ParentComponent;
