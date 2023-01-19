import { useEffect, useState } from "react";

export function useSearch<T>(url: string) {
  let [datas, setDatas] = useState<T | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error("Status" + response.status);
        } else {
          datas = await response.json();
          setDatas(datas);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return datas;
}
