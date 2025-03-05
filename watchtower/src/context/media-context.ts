import { createContext, Dispatch, SetStateAction } from "react";
import { Media } from "../types/media"; 

type mediaContextValue = {
  media: Media[];
  setMedia: Dispatch<SetStateAction<Media[]>>;
};

export const MediaContext = createContext<mediaContextValue>({
  media: [],
  setMedia: ()=>{},
});