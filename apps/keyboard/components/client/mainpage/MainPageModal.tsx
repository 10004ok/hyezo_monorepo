import {
  ComboBox,
  Form,
  Input,
  Modal,
  SubmitButton,
  Text,
  TextArea,
  zodSubmitHandler,
} from "@hyezo/ui";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { fetchPost, fetcher } from "~/lib/utils";
import { type TBrand } from "~/types/prisma";
import useSWR from "swr";
import { cn } from "~/../../packages/utils/src/utils";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  as?: "search" | "post";
};

export default function MainPageModal({ isOpen, setIsOpen, as }: ModalProps) {
  const [category, setCategory] = useState<"BUY" | "SELL" | undefined>();
  const [itemType, setItemType] = useState<"HOUSING" | "KEYCAP" | undefined>();
  const { data: brands = [] } = useSWR("/api/getAllBrand", fetcher<TBrand[]>);
  const filteredBrands = brands?.filter(
    brand => brand.type === itemType || brand.type === "VENDOR",
  );

  useEffect(() => {
    return () => {
      setCategory(undefined);
      setItemType(undefined);
    };
  }, [isOpen]);

  const onSubmit: zodSubmitHandler = async data => {
    await fetchPost("/api/createPost", {
      body: JSON.stringify({ ...data, category, status: "ING" }),
    });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="narrow"
      className="drop-shadow-blue flex min-w-max flex-col items-stretch rounded-xl bg-gray-900 p-10"
      title="Search Users"
    >
      {as === "post" ? (
        <Modal.Content className="grid gap-4">
          <div className="flex w-full justify-between gap-5 duration-700">
            <p className={`${category && "text-gray-700/70"}`}>
              1. 카테고리를 설정해주세요.
            </p>
            <div className="flex justify-evenly gap-5">
              <button
                className={`duration-300 hover:text-white ${
                  category === "BUY"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setCategory("BUY")}
              >
                구매
              </button>
              <button
                className={`duration-300 hover:text-white ${
                  category === "SELL"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setCategory("SELL")}
              >
                판매
              </button>
            </div>
          </div>

          <div
            className={`flex w-full justify-between gap-5 duration-700 ${
              category
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-0 select-none opacity-0"
            } ${itemType && "place-self-start"}`}
          >
            <p className={`${category && "text-gray-700/70"}`}>
              2. 무엇을 {category === "SELL" ? "판매" : "구매"}하실 건가요?
            </p>
            <div className="flex justify-evenly gap-5">
              <button
                className={`duration-300 hover:text-white ${
                  itemType === "HOUSING"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setItemType("HOUSING")}
              >
                하우징
              </button>
              <button
                className={`duration-300 hover:text-white ${
                  itemType === "KEYCAP"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setItemType("KEYCAP")}
              >
                키캡
              </button>
            </div>
          </div>

          <div
            className={`duration-700 ${
              itemType
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-75 select-none opacity-0"
            }`}
          >
            <p className="pb-3">3. 나머지 항목을 작성해주세요.</p>
            <Form onSubmit={onSubmit} className="gap-3">
              {/* 브랜드 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="blue-dot" />
                  <span>브랜드</span>
                </div>
                <ComboBox<TBrand>
                  name="objDataCombo"
                  labelKey="name"
                  list={filteredBrands}
                  color="darkNavy"
                  width="narrow"
                />
              </div>
              {/* 모델 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="blue-dot" />
                  <span>모델명</span>
                </div>

                <Input name="title" color="darkNavy" />
              </div>
              {/* 가격 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="blue-dot" />
                  <span>가격</span>
                </div>
                <Input
                  name="price"
                  type="number"
                  placeholder="만원 단위"
                  color="darkNavy"
                />
              </div>

              {itemType === "HOUSING" ? (
                <>
                  {/* 레이아웃 인풋 */}
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center">
                      <div className="gray-dot" />
                      <span>레이아웃</span>
                    </div>
                    <Input name="layout" color="darkNavy" />
                  </div>

                  {/* 색상 인풋 */}
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center">
                      <div className="gray-dot" />
                      <span>색상</span>
                    </div>
                    <Input name="color" color="darkNavy" />
                  </div>
                </>
              ) : (
                // 킷 인풋
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center">
                    <div className="gray-dot" />
                    <span>킷</span>
                  </div>
                  <Input name="layout" color="darkNavy" />
                </div>
              )}

              {/* 특이사항 인풋 */}
              <div className="-mb-4 flex items-center">
                <div className="flex items-center py-2">
                  <div className="gray-dot" />
                  <span>특이사항</span>
                </div>
              </div>
              <TextArea
                name="message"
                className="border-gray-700/70 bg-gray-900 text-white/80"
              />
              <SubmitButton>작성</SubmitButton>
            </Form>
          </div>
        </Modal.Content>
      ) : (
        <></>
      )}
    </Modal>
  );
}

type ModalFirstPhaseProps = {
  setCategory: Dispatch<SetStateAction<"BUY" | "SELL" | undefined>>;
};

MainPageModal.FirstPhase = ({ setCategory }: ModalFirstPhaseProps) => {
  return (
    <Modal.Content className="relative grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
      <div
        className="grid h-full w-full cursor-pointer place-items-center border-r border-gray-800"
        onClick={() => setCategory("BUY")}
      >
        구매
      </div>
      <div className="cursor-pointer" onClick={() => setCategory("SELL")}>
        판매
      </div>
    </Modal.Content>
  );
};

type ModalSecondPhaseProps = {
  setItemType: Dispatch<SetStateAction<"HOUSING" | "KEYCAP" | undefined>>;
};

MainPageModal.SecondPhase = ({ setItemType }: ModalSecondPhaseProps) => {
  return (
    <Modal.Content className="relative grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
      <div
        className="grid h-full w-full cursor-pointer place-items-center border-r border-gray-800"
        onClick={() => setItemType("HOUSING")}
      >
        하우징
      </div>
      <div className="cursor-pointer" onClick={() => setItemType("KEYCAP")}>
        키캡
      </div>
    </Modal.Content>
  );
};

type ModalPostModeProps = {
  onSubmit: zodSubmitHandler;
  brands: TBrand[];
  itemType: "HOUSING" | "KEYCAP" | "";
};

MainPageModal.PostMode = ({ onSubmit, brands, itemType }: ModalPostModeProps) => {
  return (
    <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
      <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
        등록
      </Text>
      <Form onSubmit={onSubmit}>
        <div className="-mb-2 flex items-center text-white">
          <div className="blue-dot" />
          <span>브랜드</span>
        </div>
        <ComboBox<TBrand>
          name="objDataCombo"
          labelKey="name"
          list={brands}
          color="darkNavy"
        />
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>모델명</span>
            </div>
            <Input name="title" color="darkNavy" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>가격</span>
            </div>
            <Input name="price" type="number" placeholder="만원 단위" color="darkNavy" />
          </div>
        </div>
        {itemType === "HOUSING" ? (
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-white">
                <div className="blue-dot" />
                <span>레이아웃</span>
              </div>
              <Input name="layout" color="darkNavy" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center text-white">
                <div className="blue-dot" />
                <span>색상</span>
              </div>
              <Input name="color" color="darkNavy" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>킷</span>
            </div>
            <Input name="layout" color="darkNavy" />
          </div>
        )}

        <div className="-mb-2 flex items-center text-white">
          <div className="blue-dot" />
          <span>특이사항</span>
        </div>
        <TextArea
          name="message"
          className="border-gray-700/70 bg-gray-900 text-white/80"
        />
        <SubmitButton>dd</SubmitButton>
      </Form>
    </Modal.Content>
  );
};

MainPageModal.SearchMode = () => {
  const onSubmit: zodSubmitHandler = ({ text }) => {
    console.log(text);
  };

  return (
    <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
      <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
        찾기
      </Text>
      <Form onSubmit={onSubmit}>
        <Input name="text" />
        <SubmitButton>검색</SubmitButton>
      </Form>
    </Modal.Content>
  );
};
