export const changeToIdFormat = (title: string) => {
  return title.toLowerCase().replace(/ /g, "-");
};
