import { ApiController } from '../enum/api-controller.enum';
import { environment } from '../../../environments/environment';

export const buildUrlApi = (controller: ApiController): string => {
  return `${environment.apiUrl}/${controller}`;
};
