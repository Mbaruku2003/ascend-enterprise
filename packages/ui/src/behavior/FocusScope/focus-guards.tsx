import {
    forwardRef,
} from "react";

export const FocusGuard =
forwardRef<
HTMLSpanElement,
React.HTMLAttributes<HTMLSpanElement>
>(
(
props,
ref,
) => (

<span
ref={ref}
tabIndex={0}
aria-hidden="true"
style={{

position: "fixed",

opacity: 0,

pointerEvents: "none",

width: 1,

height: 1,

}}

{...props}
/>

),
);

FocusGuard.displayName =
"FocusGuard";

export default FocusGuard;
