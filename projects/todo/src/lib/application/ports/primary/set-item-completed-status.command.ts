export class SetItemCompletedStatusCommand {
  constructor(readonly id: number, readonly completed: boolean) {
  }
}
