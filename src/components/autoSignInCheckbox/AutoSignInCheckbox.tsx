import React, { ChangeEvent } from "react";
import autoSignInCheckboxStyle from "./AutoSignInCheckbox.css";
import Checkbox from "../checkbox/Checkbox";
import Tooltip, { Orientation } from "../tooltip/Tooltip";

interface AutoSignInCheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  orientation?: Orientation;
  message?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AutoSignInCheckbox: React.FC<AutoSignInCheckboxProps> = ({
  label = "자동 로그인",
  checked,
  disabled,
  orientation = "top",
  message = "개인 정보 보호를 위해 본인 기기에서만 이용해주세요",
  onChange,
  ...restProps
}) => {
  return (
    <div className={autoSignInCheckboxStyle.wrapper}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {checked && (
        <Tooltip
          left={-5}
          top={24}
          orientation={orientation}
          message={message}
        />
      )}
    </div>
  );
};

export default AutoSignInCheckbox;
