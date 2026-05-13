export type State = {
  locale: string;
  successTypeDialog: App.SuccessDialogType;
};

export type Actions = {
  changeSuccessTypeDialog: (type: App.SuccessDialogType) => void;
};

export type SetState<T extends State> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
    actionName?: string,
  ): void;
}['_'];
