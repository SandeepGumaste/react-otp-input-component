import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import { OtpInput } from "../otp-component/OtpInput";

const stories = storiesOf("Otp", module);

stories.add("Otp Input", () => {
  const [newOtp, setNewOtp] = useState("");
  useEffect(() => {
    console.log(newOtp);
  }, [newOtp]);
  return (
    <OtpInput
      numInputs={4}
      onChange={(newOtp) => {
        console.log(newOtp);
        setNewOtp(newOtp);
      }}
      separator={<span>-</span>}
    />
  );
});
