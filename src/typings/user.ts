export interface IUser {
  badge?: string;
  githubURL?: string;
  gsocYear?: string;
  linkedinURL?: string;
  skillsList?: string[];
  email: string;
  roles: string[];
  status: boolean;
  timezone?: string;
  uid?: string;
  uuid?: string;
  username?: string;
  profilePicture?: string;
}

export interface IUserExpanded {
    uid: Uid[];
    uuid: Uid[];
    langcode: Uid[];
    preferred_langcode: Uid[];
    preferred_admin_langcode: any[];
    name: Uid[];
    pass: Uid[];
    mail: Uid[];
    timezone: Uid[];
    status: Uid[];
    created: Uid[];
    changed: Uid[];
    access: Uid[];
    login: Uid[];
    init: Uid[];
    roles: Role[];
    default_langcode: Uid[];
    field_badge: any[];
    field_githuburl: any[];
    field_gsocyear: any[];
    field_linkedinurl: any[];
    field_portfoliourl: any[];
    field_skills_list: any[];
    user_picture: any[];
  }
  
interface Role {
    target_id: string;
  }
  
interface Uid {
    value: string;
  }
  