declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Any = any;

  type Slide = {
    title: string;
    description: string;
  };

  type LayoutComponent<T> = {
    children?: T;
    title?: string;
    description?: string | string[];
    isAdminPage?: boolean;
    renderGuestHeader?: () => JSX.Element;
  };

  type MenuItem = {
    name: string;
    link?: string;
    icon: JSX.Element;
    disabled?: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };

  type ErrorValue = {
    msg: string;
    type: string;
  };

  type ResponseError = {
    message: string;
    errors?: ErrorValue[];
    status?: number;
  };

  type Tab = {
    title: string | ReactNode;
    icon?: FunctionComponentElement;
    isSubActive?: boolean;
    component: FunctionComponentElement;
    iconPosition?: 'bottom' | 'top' | 'start' | 'end';
  };

  interface PaginationParams {
    key?: string;
    page?: number;
    perPage?: number;
    sortFields?: string;
    sortDirections?: string;
  }

  interface Pagination<T = unknown> {
    items: T[];
    page: number;
    total: number;
    size: number;
  }

  type TabType = 'default' | 'fill' | 'pill';

  type Orientation = 'vertical' | 'horizontal';

  type PlayerChildElement = {
    el: () => HTMLDivElement;
    on: (key: string, callback?: (e: MouseEvent) => void) => void;
    off: (key: string, callback?: (e: MouseEvent) => void) => void;
    handleMouseDown: (e: MouseEvent) => void;
  };

  type SuccessDialogType =
    | 'SignUpSuccess'
    | 'ResetPasswordSuccess'
    | 'SetUpSuccess'
    | 'AdminSignInSuccess';

  type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never;

  type Breadcrumb = {
    path?: string;
    name: string;
  };

  type Order = 'ASC' | 'DESC';

  type Sort = {
    field: string;
    direction: Order;
  };

  type DataSource = Record<string, Any> | Any;

  interface DataTablePagination<T = unknown>
    extends Omit<Pagination<T>, 'items' | 'total'> {
    items?: T[];
    total?: number;
  }

  type DataTableColumn<T = DataSource> = {
    key?: T | (string & {});
    label?: string;
    width?: string | number;
    sortable?: boolean;
    emptyValue?: string;
    sortKey?: T | (string & {});
    fieldType?: 'date';
    format?: string;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    render?: (record: T, index: number) => ReactNode;
  };

  type MenuOption = {
    label: string;
    icon?: ReactNode;
    action: () => void;
  };
}
