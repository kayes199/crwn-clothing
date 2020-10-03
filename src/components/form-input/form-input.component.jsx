import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormIntputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormIntputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormIntputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
