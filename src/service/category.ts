import instance from "./intance";

export const create = (category: any) => {
  // const config =
  console.log("CREATE category: ", category);
  const url = `/category`;
  return instance.post(url, category);
};

export const list = () => {
  const url = `/category`;

  return instance.get(url);
};

export const getCategory = () => {
  const url = `/categories`;

  return instance.get(url);
};

export const remove = (id: any) => {
  const url = `/category/${id}`;

  return instance.delete(url);
};
export const updatecate = (id: any, category: any) => {
  const url = `/category/${id}`;
  return instance.put(url, category);
};
export const read = (id: any) => {
  const url = `/category/${id}`;
  return instance.get(url);
};
