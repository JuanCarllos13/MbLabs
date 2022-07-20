export const dateMask = (value: string) => {
  if (!value) return;
  return value
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2");
};

