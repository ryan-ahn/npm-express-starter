/**
 * Author : Ryan
 * Date : 2023-04-20
 * Desc : system
 */

export interface SystemError {
  code: string;
  message: string;
  request: any;
  response: any;
}
