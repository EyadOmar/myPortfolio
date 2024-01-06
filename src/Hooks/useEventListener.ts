import { useEffect, useRef } from 'react';

export default function (
  eventType: string,
  callBackFn: EventListener,
  element: EventTarget = window
) {
  const callBackFnRef = useRef(callBackFn);
  useEffect(() => {
    callBackFnRef.current = callBackFn;
  }, [callBackFn]);

  useEffect(() => {
    const handler = (e: Event | MediaQueryListEvent) => {
      callBackFnRef.current(e);
    };
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
