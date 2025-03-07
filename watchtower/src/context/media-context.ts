import { createContext, Dispatch, SetStateAction } from "react";
import { Media } from "../types/media";

type MediaContextValue = {
  media: Media[];
  createMedia: (media: Media) => void;
  removeMedia: (id: string) => void;
  editMedia: (media: Media) => void;
  editingMedia: Media | null;
  setEditingMedia: Dispatch<SetStateAction<Media | null>>;
};

export const MediaContext = createContext<MediaContextValue>({
  media: [],
  createMedia: () => {},
  removeMedia: () => {},
  editMedia: () => {},
  editingMedia: null,
  setEditingMedia: () => {},
});
