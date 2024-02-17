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

export const searchPrompts = (searchTerm) => {
  const query = `*[_type == "prompt" && (createBy.name match "${searchTerm}*" || title match "${searchTerm}*" || prompt match "${searchTerm}*" || category match "${searchTerm}*")] {
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
