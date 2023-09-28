import React, { ChangeEvent, useState } from "react";
import classNames from "classnames";
import inputStyle from "./Input.css";
import Icon, { IconType } from "../icon/Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelVisible?: boolean;
  icon?: IconType;
  email?: boolean;
  password?: boolean;
  error?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  name,
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType = () => {
    if (email) {
      return "email";
    }

    if (password) {
      return isPasswordVisible ? "text" : "password";
    }

    return "text";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const iconType = isPasswordVisible ? "show" : "hide";
  const iconLabel = `비밀번호 ${isPasswordVisible ? "표시" : "감춤"}`;

  return (
    <div className={classNames(inputStyle.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(
          inputStyle.label,
          labelVisible || inputStyle.labelHidden
        )}
      >
        {label}
      </label>
      <div
        className={classNames(
          inputStyle.inputWrapper,
          errorProp && inputStyle.inputWrapperError
        )}
      >
        {icon ? <Icon type={icon} alt={icon} /> : null}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={classNames(inputStyle.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button
            type="button"
            className={inputStyle.button}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} />
          </button>
        ) : null}
      </div>
      {errorProp && (
        <span role="alert" className={inputStyle.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  );
};

export default Input;
