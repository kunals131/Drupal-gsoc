import { drupal } from '@/lib/drupal';

export const createBlogAPI = ({ data }: { data: any }) =>
  drupal.post('/blog', data).then((res) => res.data);
