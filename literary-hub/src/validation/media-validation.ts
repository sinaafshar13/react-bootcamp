import i18next from "i18next";

import { toast } from "react-toastify";

import { MODAL_CONTAINER_ID } from "../constants/id.ts";

import { Media } from "../types/media.ts";

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 32;
const MAX_DESCRIPTION_LENGTH = 500;

type ValidationRule = {
  isValid: (media: Media) => boolean;
  messageKey: string;
};

const validationRules: ValidationRule[] = [
  {
    isValid: (media) => Boolean(media.title?.trim()),
    messageKey: "validation.title.required",
  },
  {
    isValid: (media) => Boolean(media.description?.trim()),
    messageKey: "validation.description.required",
  },
  {
    isValid: (media) => Boolean(media.date),
    messageKey: "validation.date.required",
  },
  {
    isValid: (media) => Boolean(media.category),
    messageKey: "validation.category.required",
  },
  {
    isValid: (media) =>
      media.title.length >= MIN_TITLE_LENGTH &&
      media.title.length <= MAX_TITLE_LENGTH,
    messageKey: "validation.title.length",
  },
  {
    isValid: (media) => media.description.length <= MAX_DESCRIPTION_LENGTH,
    messageKey: "validation.description.length",
  },
  {
    isValid: (media) =>
      media.category === "movie" ||
      media.category === "series" ||
      media.category === "book",
    messageKey: "validation.category.invalid",
  },
  {
    isValid: (media) => {
      const mediaDate = new Date(media.date);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      return mediaDate <= today;
    },
    messageKey: "validation.date.invalid",
  },
];

function showValidationError(messageKey: string): void {
  const message = i18next.t(messageKey as never, {
    minTitleLength: MIN_TITLE_LENGTH,
    maxTitleLength: MAX_TITLE_LENGTH,
    maxDescriptionLength: MAX_DESCRIPTION_LENGTH,
  });

  toast.error(message, { containerId: MODAL_CONTAINER_ID });
}

export const mediaValidation = (media: Media): boolean => {

  for (const rule of validationRules) {
    
    if (!rule.isValid(media)) {
      showValidationError(rule.messageKey);

      return false;
    }
  }

  return true;
};
