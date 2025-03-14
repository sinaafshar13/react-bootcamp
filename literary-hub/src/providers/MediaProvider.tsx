import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { MediaContext } from "../context/media-context";

import { Media } from "../types/media";

import { MEDIA_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys";
import { toast } from "react-toastify";

type Props = PropsWithChildren;

const MediaProvider = ({ children }: Props): ReactNode => {
  const [media, setMedia] = useState<Media[]>(loadMediaInitialState);

  useEffect(() => {
    localStorage.setItem(MEDIA_LOCAL_STORAGE_KEY, JSON.stringify(media));
  }, [media]);

  const createMedia = (media: Media): void => {
    setMedia((old) => [...old, { ...media }]);
    toast.success("Media created successfully!")

  };

  const editMedia = (media: Media): void => {
    setMedia((old) => old.map((x) => (x.id === media.id ? { ...media } : x)));
    toast.success("Media edited successfully!")
  };

  const removeMedia = (id: string): void => {
    setMedia((old) => old.filter((x) => x.id !== id));
    toast.success("Media removed!")
  };

  return (
    <MediaContext.Provider
      value={{
        media,
        createMedia,
        removeMedia,
        editMedia,
      }}
    >
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
  return JSON.parse(items);
};
