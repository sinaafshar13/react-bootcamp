import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { MediaContext } from "../context/media-context";

import { Media } from "../types/media";

import { MEDIA_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys";

type Props = PropsWithChildren;

const MediaProvider = ({ children }: Props): ReactNode => {
  const [media, setMedia] = useState<Media[]>(loadMediaInitialState);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem(MEDIA_LOCAL_STORAGE_KEY, JSON.stringify(media));
  }, [media]);

  const filteredMedia = media.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const setSearch = (term: string) => {
    setSearchTerm(term);
  };

  const createMedia = (media: Media): void => {
    setMedia((old) => [...old, { ...media }]);
    toast.success(t("media.actions.success.created", { title: media.title }));
  };

  const editMedia = (media: Media): void => {
    setMedia((old) => old.map((x) => (x.id === media.id ? { ...media } : x)));
    toast.success(t("media.actions.success.edited", { title: media.title }));
  };

  const removeMedia = (id: string): void => {
    const mediaItem = media.find((x) => x.id === id);

    setMedia((old) => old.filter((x) => x.id !== id));
    toast.success(t("media.actions.success.removed", { title : mediaItem}));
  };

  return (
    <MediaContext.Provider
      value={{
        filteredMedia: filteredMedia,
        createMedia,
        removeMedia,
        editMedia,
        setSearch,
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
