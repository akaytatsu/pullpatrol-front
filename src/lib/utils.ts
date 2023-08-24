import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  // format date 2023-08-22T11:40:24.79052Z as YYYY-MM-DD
  const dateParts = date.split("T")[0].split("-");

  return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
}
