/**
 * ページルート
 */
export enum PageRoute {
  LOGIN = "/auth/login",

  HOME = "/",
  USERS = "/users",
  USERS_CREATE = "/users/create",
  USERS_DETAIL = "/users/[id]",
}

/**
 * ページ名
 */
export const pageNameMap = {
  [PageRoute.LOGIN]: "ログイン",

  [PageRoute.HOME]: "ホーム",
  [PageRoute.USERS]: "ユーザー管理",
  [PageRoute.USERS_CREATE]: "新規登録",
  [PageRoute.USERS_DETAIL]: "詳細",
};

/**
 * APIルート
 */
export enum ApiRoute {
  USERS = "/api/users",
}