
import { useQuery } from "@tanstack/react-query";

async function getRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
}

export default function useRepos(username) {
  return useQuery({
    queryKey: ["repos", username],
    queryFn: () => getRepos(username),
    staleTime: 1000 * 60 * 5,
  });
}
