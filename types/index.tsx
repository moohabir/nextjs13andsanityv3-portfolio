export interface Post {
  i_d: number | string;
  slug: string;
  title: string;
  description: string;
  _createdAt: string;
  blockContent: any;
  current: string;
  body: any;
  author: string;
  image: string;
}

export interface About {
  id: number | string;
  title: string;
  description: string;
  _createdAt: string;
}

export interface Skills {
  id: number | string;
  title: string;
  description: string;
  _createdAt: string;
}

export interface Hero {
  id: number | string;
  title: string;
  description: string;
  _createdAt: string;
}
