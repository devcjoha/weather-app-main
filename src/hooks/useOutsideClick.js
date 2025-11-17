import { useEffect } from "react";

export default function useOutsideClick(ref, callback, active = true) {
  useEffect(() => {
    if (!active) return;

    const handlePointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [ref, callback, active]);
}
