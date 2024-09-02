import { FetchError } from "@/types/error";

/**
 * JSON データ取得用fetch
 * @param url
 * @returns
 */
export const fetcher = async (url: string) => {
  const res = await fetch(url);

  // もしステータスコードが 200-299 の範囲内では無い場合、
  // レスポンスをパースして投げようとします。
  if (!res.ok) {
    const error: FetchError = new Error(
      "An error occurred while fetching the data.",
    );
    // エラーオブジェクトに追加情報を付与します。
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};