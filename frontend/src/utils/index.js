export const getUser = (userId) => {
  const query = `*[_type == "user" && _id == "${userId}"]`;
  return query;
};

export const getPrompts = () => {
  const query = `*[_type == "prompt"] {
    ...,
    createBy -> {
      _id,
      name, 
      email,
      image
    }
  }`;
  return query;
};
