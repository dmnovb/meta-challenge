import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [state, setState] = useState<any>({ data: null, loading: true });

  useEffect(() => {
    setState((state: any) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((data) => data.text())
      .then((data) => setState({ data: data, loading: false }));
  }, [url]);

  return state;
};
