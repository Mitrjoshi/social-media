// hooks/useReaction.ts
import { useState } from "react";

export function useLikeDislike(initial: "like" | "dislike" | null = null) {
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(initial);

  const toggleReaction = () => {
    setReaction((prev) => {
      if (prev === null) return "like";
      if (prev === "like") return "dislike";
      return null; // if "dislike"
    });
  };

  return {
    reaction,
    isLiked: reaction === "like",
    isDisliked: reaction === "dislike",
    toggleReaction,
  };
}
