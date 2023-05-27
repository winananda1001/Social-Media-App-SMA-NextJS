export const getPostById = async (id) => {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();

  return post;
};

export const getPosts = async () => {
  const response = await fetch("/api/posts");
  const responseData = await response.json();

  return responseData;
};