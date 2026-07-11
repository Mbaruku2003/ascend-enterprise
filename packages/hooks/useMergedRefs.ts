import {
  MutableRefObject,
  Ref,
  useMemo,
} from "react";

function assignRef<T>(
  ref: Ref<T> | undefined,
  value: T,
) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  (
    ref as MutableRefObject<T>
  ).current = value;
}

export function useMergedRefs<T>(
  ...refs: Array<Ref<T> | undefined>
): Ref<T> {
  return useMemo(
    () => (value: T) => {
      refs.forEach((ref) =>
        assignRef(ref, value),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}

export default useMergedRefs;
