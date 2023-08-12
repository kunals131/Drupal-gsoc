import { IUser, IUserExpanded } from '@/typings/user';

export const parseUser = (user: IUserExpanded) => {
  const parsedUser: IUser = {
    badge: user.field_badge[0]?.value,
    githubURL: user.field_githuburl[0]?.value,
    gsocYear: user.field_gsocyear[0]?.value,
    linkedinURL: user.field_linkedinurl[0]?.value,
    skillsList: user.field_skills_list[0]?.value.split(','),
    email: user.mail[0]?.value,
    roles: user.roles.map((role) => role.target_id),
    status: user.status[0]?.value === '1',
    timezone: user.timezone[0]?.value,
    uid: user.uid[0]?.value,
    uuid: user.uuid[0]?.value,
    username: user.name[0]?.value,
    profilePicture: user.user_picture[0]?.url,
  };
  return parsedUser;
};
