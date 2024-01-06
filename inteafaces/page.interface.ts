export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface TopPageModel {
  tags: string[];
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  advantages?: TopPageAdvantage[];
  hh?: HhData;
  seoText?: string;
  tagsTitle: string;
  createdAt: string;
  updatedAt: string;
  metaTitle: string;
  metaDescription: string;
}
