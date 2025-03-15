import { createContext } from "react";

import { Media } from "../types/media";

type MediaContextValue = {
  filteredMedia: Media[];
  createMedia: (media: Media) => void;
  removeMedia: (id: string) => void;
  editMedia: (media: Media) => void;
  setSearch: (term: string) => void;
};

export const MediaContext = createContext<MediaContextValue>({
  filteredMedia: [],
  createMedia: () => {},
  removeMedia: () => {},
  editMedia: () => {},
  setSearch: () => {},
});
