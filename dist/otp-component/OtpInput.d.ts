import { ReactElement } from "react";
import "./otpInput.css";
export interface OtpInputProps {
    numInputs: number;
    onChange: (value: string) => void;
    separator: ReactElement;
}
export declare const OtpInput: ({ numInputs, onChange, separator }: OtpInputProps) => JSX.Element;
