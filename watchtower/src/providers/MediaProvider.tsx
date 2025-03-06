import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { MediaContext } from "../context/media-context";

import { Media } from "../types/media";

import { MEDIA_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys";

type LocalStorageMedia = Omit<Media, "data"> & { data: string };

type Props = PropsWithChildren;

const MediaProvider = ({ children }: Props): ReactNode => {
  const [media, setMedia] = useState<Media[]>(loadMediaInitialState);

  useEffect(() => {
    localStorage.setItem(MEDIA_LOCAL_STORAGE_KEY, JSON.stringify(media));
  }, [media]);

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;

const loadMediaInitialState = (): Media[] => {
  const items = localStorage.getItem(MEDIA_LOCAL_STORAGE_KEY);

  if (!items) {
    return [];
  }
  return JSON.parse(items).map((item: LocalStorageMedia) => ({
    ...item,
    date: new Date(item.date),
  }));
};
