import { InjectionToken } from '@angular/core';
import { SetItemCompletedStatusCommand } from './set-item-completed-status.command';

export const SET_ITEM_COMPLETED_STATUS_COMMAND = new InjectionToken<SetItemCompletedStatusCommandPort>('SET_ITEM_COMPLETED_STATUS_COMMAND');

export interface SetItemCompletedStatusCommandPort {
  setItemCompletedStatus(command: SetItemCompletedStatusCommand): void;
}
