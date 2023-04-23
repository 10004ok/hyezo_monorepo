import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { PostStatusPopup, ChatRoomPopup } from "~/components/client";
import { SplitWord } from "~/components/server";
import { useCardMouseEffect, useUserSession } from "~/hooks";
import { createTitle } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

type GridCardProps = {
  allItems?: TItems[];
  setSearchedItems: Dispatch<SetStateAction<TItems[] | undefined>>;
};

export default function GridCard({ allItems, setSearchedItems }: GridCardProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const user = useUserSession();
  const [statusPopup, setStatusPopup] = useState<boolean[]>([false]);

  useCardMouseEffect(gridRef);

  useEffect(() => {
    if (!allItems) return;
    setStatusPopup(Array.from({ length: allItems.length }, () => false));
  }, [allItems]);

  const toggleCardOverlay = useCallback(
    (idx: number) => {
      setStatusPopup(prev => {
        const copy = [...prev];
        copy[idx] = !copy[idx];
        return copy;
      });
    },
    [setStatusPopup],
  );

  return (
    <div className="gridcards text-white" ref={gridRef}>
      {allItems?.map((card, i) => (
        <div className="gridcard" key={card.id}>
          {statusPopup[i] &&
            (card.author.id === user?.id ? (
              <PostStatusPopup
                postId={card.id}
                presentStatus={card.status}
                closeCardOverlay={toggleCardOverlay}
                setSearchedItems={setSearchedItems}
                idx={i}
              />
            ) : (
              <ChatRoomPopup
                authorId={card.authorId}
                closeCardOverlay={toggleCardOverlay}
                idx={i}
              />
            ))}
          <div
            onClick={() => toggleCardOverlay(i)}
            className="absolute right-0 top-0 z-10 m-3 flex cursor-pointer flex-col items-center"
          >
            <Image
              width={33}
              height={33}
              src={card.author.image || "/images/defaultImage.png"}
              alt="프사"
              className="splitword_author rounded-full pb-1"
            />
            <p>{createTitle(SplitWord.Aurhor, card.author.nickname || "")}</p>
          </div>
          <div className="gridcard_content flex items-end justify-between">
            <div className="flex flex-col pb-2 pl-3">
              <div className="flex items-center gap-3 pb-2">
                <p
                  className={`px-2  py-px uppercase text-black ${
                    card.brandName === "gmk" ? "bg-orange-400" : "bg-white"
                  }`}
                >
                  {card.brandName}
                </p>
                <p>{card.layout}</p>
                <p>{card.color}</p>
              </div>
              <p className="font-point line-clamp-1 text-2xl font-bold">
                {createTitle(SplitWord.Title, card.title)}
              </p>
            </div>
            <div className="flex flex-col items-center pb-2 pr-1 lg:pr-3">
              <p className="text-2xl font-bold">
                {createTitle(SplitWord.Price, String(card.price))}
              </p>
              <div
                className={`px-5 italic ${
                  card.status === "ING"
                    ? "text-emerald-700"
                    : card.status === "END"
                    ? "text-red-900"
                    : "text-orange-600"
                }`}
              >
                {card.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}