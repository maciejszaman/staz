export interface Posts {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  body: string;
}

export interface PaginationProps {
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
  totalPosts: number;
  currentPage: number;
}
