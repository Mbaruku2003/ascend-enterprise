/**
 * Ascend Enterprise UI
 * --------------------
 * forwardRef
 *
 * A strongly typed wrapper around React.forwardRef().
 *
 * Goals
 * -----
 * ✓ Better TypeScript inference
 * ✓ Consistent display names
 * ✓ Generic component support
 * ✓ Tree-shakeable
 * ✓ Zero runtime overhead
 */

import {
  forwardRef as reactForwardRef,
  type ForwardRefRenderFunction,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
} from "react";

/**
 * A strongly typed wrapper around React.forwardRef().
 *
 * @example
 * ```tsx
 * interface ButtonProps {
 *   children: React.ReactNode;
 * }
 *
 * export const Button = forwardRef<
 *   HTMLButtonElement,
 *   ButtonProps
 * >((props, ref) => {
 *   return (
 *     <button ref={ref}>
 *       {props.children}
 *     </button>
 *   );
 * });
 * ```
 */
export function forwardRef<TInstance, TProps = {}>(
  render: ForwardRefRenderFunction<TInstance, TProps>,
): ForwardRefExoticComponent<
  PropsWithoutRef<TProps> & RefAttributes<TInstance>
> {
  const component = reactForwardRef(render);

  // Automatically infer a display name for DevTools.
  component.displayName =
    render.displayName ??
    render.name ??
    "AnonymousComponent";

  return component;
}

export default forwardRef;
