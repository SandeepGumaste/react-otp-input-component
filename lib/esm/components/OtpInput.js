import React, { useState } from "react";
var OtpInput = function (_a) {
    var numInputs = _a.numInputs;
    var _b = useState(new Array(numInputs || 4).fill("")), otp = _b[0], setOtp = _b[1];
    return (React.createElement("div", null, otp.map(function (_, index) {
        return (React.createElement(React.Fragment, { key: index },
            React.createElement("input", { type: "number" })));
    })));
};
export default OtpInput;
