export const getCountFetch = async (startUrl: string): Promise<Number> => {
  const authorizationToken: string = "XXX";
  let url: string = startUrl;
  let count: number = 0;
  let pages: number = 0;

  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      count = data.count;
      pages = Math.ceil(count / 50);
    });
  return pages;
};
