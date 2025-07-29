export const countVisitors = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_COUNTER_API;
  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }
  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  if (!response.ok) {
    throw new Error("Failed to update visitor count");
  }
  const data = await response.json();
  console.log("Visitor count data:", data);
  return data;
};
