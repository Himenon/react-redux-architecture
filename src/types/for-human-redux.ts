// 人間にとってわかりやすい型定義をならべるところ

export interface SimplePrepareAction<Payload> {
  payload: Payload;
}

export type ActionCreator<P> = () => P;
