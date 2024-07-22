import { atom } from "recoil";


export const userInfo = atom({
  key: "userInfo",
  default: null,
});

export const SkinAnalysisData = atom({
  key: "SkinAnalysisData",
  default: null,
});
export const EWasteCompletion = atom({
  key: "EWasteCompletion",
  default: false,
});
export const OhmConnectCompletion = atom({
  key: "OhmConnect",
  default: false,
});
