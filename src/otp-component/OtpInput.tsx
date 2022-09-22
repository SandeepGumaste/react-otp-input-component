import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./otpInput.css";

export interface OtpInputProps {
  numInputs: number;
  onChange: (value: string) => void;
  separator: ReactElement;
}

export const OtpInput = ({ numInputs, onChange, separator }: OtpInputProps) => {
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentOtpIndexRef = useRef(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    if (otp[0] !== "") {
      onChange(otp.join(""));
    }
  }, [otp]);
  console.log(typeof separator);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const tempOtp: string[] = [...otp];
    tempOtp[currentOtpIndexRef.current] = value.substring(value.length - 1);
    !value
      ? setActiveOtpIndex(currentOtpIndexRef.current - 1)
      : setActiveOtpIndex(currentOtpIndexRef.current + 1);
    setOtp(tempOtp);
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndexRef.current = index;
    if (key === "Backspace") {
      const tempOtp: string[] = [...otp];
      tempOtp[index] = "";
      setOtp(tempOtp);
      setActiveOtpIndex(index - 1);
    }
  };
  return (
    <div className="otpContainer">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOtpIndex ? inputRef : null}
              type="number"
              value={otp[index]}
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
            <div>{index < numInputs - 1 && separator}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
