import { Iroute } from "../models/interfaces/interfaces";

export enum RouteIdentifiers {
    ADMIN = 'admin',
    AUTH = "auth",
    LOGIN = "login",
    FORGOT_PASSWORD = 'forgot-password',

    STAFF_DIRECTORY = 'staff-directory',
    DASHBOARD = 'dashboard',
    ENTREPRENEURSHIP = 'entrepreneurship',
    PROFILE = 'profile',
    REFER_CANDIDATE = 'refer-candidate',
    JOB_OPENINGS = 'job-openings',
    REFER = 'refer-candidate',
    JOB_DETAILS = 'job-details',
    USERS = 'users',
    LIST = 'list',
    DETAIL = 'detail',
    NOT_FOUND = "**",
    STARTUP = "startup/add-pitch",
    REFERRAL_LIST = "referral-list",


    CONTENT_MANAGEMENT = 'content-management',
    MANAGE_EXERCISE = 'manage-exercise',
    ADD = "add",
}

export const AUTH : Iroute = {
    path:'auth',
    get fullurl(): string {
      return `/${this.path}`;
    },
}

export const LOGIN : Iroute = {
    path:'login',
    get fullurl(): string {
      return `${AUTH.fullurl}/${this.path}`;
    },
}
  
export const FORGOT_PASSWORD : Iroute = {
    path:'forgot-password',
    get fullurl(): string {
      return `${AUTH.fullurl}/${this.path}`;
    },
}
export const ADMIN : Iroute = {
    path:'admin',
    get fullurl(): string {
      return `/${this.path}`;
    },
}
export const DASHBOARD: Iroute = {
  path:'dashboard',
    get fullurl(): string {
      return `/${this.path}`;
    }, 
}
export const PROFILE: Iroute = {
  path:'profile',
    get fullurl(): string {
      return `/${this.path}`;
    }, 
}
export const STAFF_DIRECTORY: Iroute = {
  path:'staff-directory',
    get fullurl(): string {
      return `/${this.path}`;
    }, 
}
export const ENTREPRENEURSHIP: Iroute = {
  path:'entrepreneurship',
    get fullurl(): string {
      return `/${this.path}`;
    }, 
}
export const STARTUP: Iroute = {
  path:'startup/add-pitch',
    get fullurl(): string {
      return `/${this.path}`;
    }, 
}
export const REFER_CANDIDATE: Iroute = {
  path:'refer-candidate',
    get fullurl(): string {
      return `/${this.path}`;
    } 
}
export const POLICY_DOCUMENTS:Iroute = {
  path:'policy-documents',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const HOLIDAY_LIST:Iroute = {
  path:'holiday-list',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const MONTHLY_REVIEW:Iroute = {
  path:'monthly-review/my-performance',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const INTERVIEW:Iroute = {
  path:'interview',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const TICKETS:Iroute = {
  path:'tickets',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const DSR:Iroute = {
  path:'dsr',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const FRESHERS:Iroute = {
  path:'freshers',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const ASSETS:Iroute = {
  path:'user',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const LEAVES:Iroute = {
  path:'leaves',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const LEAVE_DETAILS:Iroute = {
  path:'leave-details/:id',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const UPCOMING_TRAININGS:Iroute = {
  path:'upcoming-trainings',
  get fullurl(): string {
    return `/${this.path}`;
  }
}

export const ONGOING_TRAININGS:Iroute = {
  path:'ongoing-trainings',
  get fullurl():string {
    return `/${this.path}`
  }
}

export const MY_TRAININGS:Iroute = {
  path:'my-trainings',
  get fullurl():string {
    return `/${this.path}`
  }
}
export const REQUESTED_TRAININGS:Iroute = {
  path:'requested-trainings',
  get fullurl():string {
    return `/${this.path}`
  }
}
export const FLOATING_LEAVES:Iroute = {
  path:'floating-leaves',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const MY_PITCH:Iroute = {
  path:'my-pitch',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const DINNER:Iroute = {
  path:'dinner',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const FOOD:Iroute = {
  path:'food',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const ATTENDANCE:Iroute = {
  path:'attendance',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const PROJECTS:Iroute = {
  path:'projects',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const TRAINING_DETAILS_TRAINEE:Iroute = {
  path:'training-details-trainee/:id',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const JOB_OPENINGS:Iroute = {
  path:'job-openings',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const JOB_DETAILS:Iroute = {
  path:'job-details/:id',
  get fullurl(): string {
    return `/${this.path}`;
  }
}

export const REFERRAL_LIST:Iroute = {
  path:'referral-list',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
export const NEW_IDEA:Iroute = {
  path:'idea',
  get fullurl(): string {
    return `/${this.path}`;
  }
}
