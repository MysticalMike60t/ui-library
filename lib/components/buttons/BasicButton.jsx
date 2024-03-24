import React from "react";
import PropTypes from "prop-types";

const BasicButton = ({ onClick, label, noClassName = false, children }) => {
  const [parentElementClassName, setParentElementClassName] = useState(
    "ui-library-basic-button"
  );
  if (!noClassName) {
    setParentElementClassName("");
  }
  return (
    <button
      className={parentElementClassName}
      onClick={onClick}
      aria-label={label}
      label={label}
      title={label}
    >
      {children}
    </button>
  );
};

BasicButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  noClassName: PropTypes.bool,
  children: PropTypes.node,
};

export default BasicButton;
