import { useEffect, useState } from 'react';
import useEventListener from './useEventListener';

export default function (mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [MediaQueryList, setMediaQueryList] = useState<MediaQueryList>(
    window.matchMedia(mediaQuery)
  );

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    'change',
    () => setIsMatch(window.matchMedia(mediaQuery).matches),
    MediaQueryList
  );

  return isMatch;
}
