export interface IPermissionAction {
  permision: Array<IActionPermision>;
  window: string;
}

interface IActionPermision {
  action: string;
  codeAction: string;
  status: boolean;
}

export interface IPermisionValue {
  READ: boolean;
  INSERT: boolean;
  UPDATE: boolean;
  STATUS: boolean;
}
