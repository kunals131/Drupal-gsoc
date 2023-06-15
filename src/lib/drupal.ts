import { DRUPAL_BASE_URL } from '@/utils/constants';
import {DrupalClient} from 'next-drupal';

export const drupal = new DrupalClient(DRUPAL_BASE_URL!)

export const createAuthetnicatedDrupalClient = (username:string,password:string)=>{
  return new DrupalClient(
    DRUPAL_BASE_URL!,
    {
      auth: {
        username,
        password
      }
    }
  )
}