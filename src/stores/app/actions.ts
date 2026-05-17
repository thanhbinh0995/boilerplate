import type { SetState, Actions, State } from './types';

const createAction = (set: SetState<State>): Actions => ({
  changeSuccessTypeDialog: (type: App.SuccessDialogType): void => {
    set(() => ({ successTypeDialog: type }));
  },
});

export default createAction;
