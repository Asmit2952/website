export type BlogPost = {
  author?: string;
  date?: string;
  excerpt: string;
  image: string;
  slug?: string;
  href?: string;
  tags?: string[];
  subtitle?: string;
  teaserImage: string;
  title: string;
  isNotAnActualPost?: boolean;
};
