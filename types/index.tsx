export interface Post {
  _id: number | string;
  name: any;
  slug: string;
  title: string;
  description: string;
  _createdAt: string;
  blockContent: any;
  current: string;
  body: any;
  author: any;
  image: string;
  mainImage: any;
  asset: string;
  _ref: string;
}

export interface About {
  id: number | string;
  title: string;
  description: string;
  _createdAt: string;
}

export interface NavList {
  id: number;
  title: string;
  url: any;
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
