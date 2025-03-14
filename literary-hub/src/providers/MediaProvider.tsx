import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { MediaContext } from "../context/media-context";

import { Media } from "../types/media";

import { MEDIA_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys";

type Props = PropsWithChildren;

const MediaProvider = ({ children }: Props): ReactNode => {
  const [media, setMedia] = useState<Media[]>(loadMediaInitialState);

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem(MEDIA_LOCAL_STORAGE_KEY, JSON.stringify(media));
  }, [media]);

  const createMedia = (media: Media): void => {
    setMedia((old) => [...old, { ...media }]);
    toast.success(t("media.actions.success.created"));
  };
 
  
  const editMedia = (media: Media): void => {
    setMedia((old) => old.map((x) => (x.id === media.id ? { ...media } : x)));
    toast.success(t("media.actions.success.edited"));
  };

  const removeMedia = (id: string): void => {
    setMedia((old) => old.filter((x) => x.id !== id));
    toast.success(t("media.actions.success.removed"));
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
