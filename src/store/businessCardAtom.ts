import {
  BusinessCardType,
  BusinessCardValidator,
} from "@/lib/validators/businessCard";
import axios from "axios";
import { atom, useSetAtom, useAtom } from "jotai";
import { loadable, selectAtom } from "jotai/utils";

// export const businessCardIdAtom = atom(0);

// export const businessCardAtom = atom(async (get) => {
//   if (get(businessCardIdAtom) === 0) {
//     return null;
//   }

//   const { data } = await axios.get(
//     `/api/business-card/${get(businessCardIdAtom)}`
//   );
//   return BusinessCardValidator.parse(JSON.parse(data));
// });

export const businessCardAtom = atom<BusinessCardType | null>(null);

export const businessCardChildIdAtom = atom(0); // 어떤 요소를 선택했는지 id 저장

// const businessCardChildSelect = atom((get) => {
//   const childId = get(businessCardChildIdAtom);
//   const [businessCard] = useAtom(businessCardAtom);

//   if (!businessCard || childId === 0) {
//     return null;
//   }

//   return businessCard.children.find((child) => child.id === childId);
// });

// const businessCardChildSelect = selectAtom(
//   businessCardAtom,
//   (businessCard) => {
//     if (!businessCard) {
//       return null;
//     }

//     return businessCard.children;
//   }
// );

// const setBusinessCard = useSetAtom(businessCardChildAtom)

export const businessCardChildAtom = atom(
  (get) => {
    const childId = get(businessCardChildIdAtom);
    const businessCard = get(businessCardAtom);

    if (!businessCard || childId === 0) {
      return null;
    }

    return businessCard.children.find((child) => child.id === childId);
  },
  (get, set, value: BusinessCardType["children"][0]) => {
    const businessCard = get(businessCardAtom);

    if (!businessCard) {
      return;
    }

    const index = businessCard.children.findIndex(
      (child) => child.id === value.id
    );

    if (index === -1) {
      return;
    }

    const newBusinessCard = {
      ...businessCard,
      children: [
        ...businessCard.children.slice(0, index),
        value,
        ...businessCard.children.slice(index + 1),
      ],
    };

    set(businessCardAtom, newBusinessCard);
  }
);

// const fnAtom = atom({ fn: () => "your function" });
// const doWhateverFnAtom = atom(
//   (get) => get(fnAtom),
//   (get, set, newFn) => {
//     set(fnAtom, { fn: newFn });
//   }
// );
