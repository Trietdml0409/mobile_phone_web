import { createContext } from "react";

//The Breadcrumb include a label and an href
export interface BreadcrumbItem {
  label: string;
  href: string;
}

//The breadrumb can be add, clear, clear the last one
export interface BreadcrumbContextType {
  breadcrumbs: BreadcrumbItem[];
  addBreadcrumb: (item: BreadcrumbItem) => void;
  clearBreadcrumbs: () => void;
  removeLast: () => void;
}


export const BreadcrumbContext = createContext<BreadcrumbContextType>({
  breadcrumbs: [],
  addBreadcrumb: () => {},
  clearBreadcrumbs: () => {},
  removeLast: () => {},
});
