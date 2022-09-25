import { deleteAsync } from 'del';
export const reset = () => deleteAsync(gulpTemplate.path.clean);
