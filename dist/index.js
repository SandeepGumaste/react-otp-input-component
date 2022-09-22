import { ReactElement } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.otpContainer{align-items:center;display:flex;justify-content:center}input{font-size:18px;height:2rem;text-align:center;width:2rem}";
styleInject(css_248z);

interface OtpInputProps {
    numInputs: number;
    onChange: (value: string) => void;
    separator: ReactElement;
}
declare const OtpInput: ({ numInputs, onChange, separator }: OtpInputProps) => JSX.Element;

export { OtpInput, OtpInputProps };
