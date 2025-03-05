import { PropsWithChildren, useState } from "react";
import { MediaContext } from "../context/media-context";
import { Media } from "../types/media";

type Props = PropsWithChildren;

const MediaProvider = ({ children }: Props) => {
  const [media, setMedia] = useState<Media[]>([
    {
      id: "1",
      title: "A million dollar baby",
      description: "this is about a girl who wants to be a boxer ...",
      date: new Date(2005, 1, 14),
      category: "movie",
    },
    {
      id: "2",
      title: "Mulholland drive",
      description: "this is about a girl who wants to be a boxer ...",
      date: new Date(2005, 1, 14),
      category: "movie",
    },
    {
      id: "3",
      title: "Better call Saul",
      description: "this is about a girl who wants to be a boxer ...",
      date: new Date(2005, 1, 14),
      category: "series",
    },
  ]);
  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
