import { type Dispatch, type SetStateAction } from "react";

export interface BlogData {
  message: string;
}

export interface BlogContextType {
  blogData: BlogData | undefined;
  setBlogData: Dispatch<SetStateAction<BlogData | undefined>>;
}
