"use client";

import BuisnessCardMaker from "@/components/BusinessCardMaker";
import { Button } from "@/components/ui/Button";
import {
  BusinessCardType,
  BusinessCardValidator,
} from "@/lib/validators/businessCard";
import { businessCardAtom, businessCardIdAtom } from "@/store/businessCardAtom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

interface PageProps {
  params: {
    id: string;
  };
}
export default function Page({ params }: PageProps) {
  const { id } = params;

  const setCardId = useSetAtom(businessCardIdAtom);
  setCardId(Number(id));

  // const { data: businessCard } = useQuery(["template", id], async () => {
  //   const { data } = await axios.get(`/api/business-card/${id}`);
  //   return BusinessCardValidator.parse(JSON.parse(data));
  // });

  const businessCard = useAtomValue(businessCardAtom);

  // useEffect(() => {
  //   axios.get(`/api/business-card/${id}`).then(({ data }) => {
  //     setBusinessCard(BusinessCardValidator.parse(JSON.parse(data)));
  //   });
  // }, [id, setBusinessCard]);

  // const businessCard = useAtomValue(businessCardAtom);
  // console.log(businessCard);

  const { mutate: createBusinessCard } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(`/api/business-card`, {
        businessCard,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  if (!businessCard) return null;

  return (
    <div className="py-[120px] h-full flex flex-col gap-5">
      <BuisnessCardMaker businessCard={businessCard} />

      <div className="flex justify-end gap-4">
        <Button onClick={() => createBusinessCard()}>Publish</Button>
        <Button variant="outline">Cancle</Button>
      </div>
    </div>
  );
}
