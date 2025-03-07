import { createContext } from "react";
import { Media } from "../types/media"; 

type MediaContextValue = {
  media: Media[];
  createMedia: (media:Media) => void ; 
  removeMedia: (id: string) => void;
};

export const MediaContext = createContext<MediaContextValue>({
  media: [],
  createMedia: () => {},
  removeMedia: () => {},
});