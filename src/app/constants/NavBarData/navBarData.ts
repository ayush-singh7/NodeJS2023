import * as routeIdentifiers from "src/app/routes/route-identifiers"
import { NavbarItem } from "src/app/models/interfaces/interfaces"
export const navBarData:Array<NavbarItem>  = [
    {
        name:'Home',
        link: routeIdentifiers.RouteIdentifiers.DASHBOARD,
        icon:'home',
    },
    {
        name:'My Profile',
        link:routeIdentifiers.RouteIdentifiers.PROFILE,
        icon:'person'
    },
    {
        name:'Staff Directory',
        link:routeIdentifiers.RouteIdentifiers.STAFF_DIRECTORY,
        icon:'description',
        chakra:true
    },
    {
        name:'Food',
        subMenuClicked:false,
        icon:'restaurant',
        chakra:true,
        subMenu:[
            {
                name:'Lunch Coupon',
                link:'food',
                icon:'lunch_dining'
            },
            {
                name:'Request Dinner',
                link:'dinner',
                icon:'dinner_dining'
            }
        ]
    },
    {
        name:'Entrepreneurship',
        icon:'credit_card',
        subMenuClicked:false,
        chakra:true,
        subMenu:[
            {
                name:'Explore',
                link:routeIdentifiers.RouteIdentifiers.ENTREPRENEURSHIP,
                icon:'horizontal_rule'
            },
            {
                name:'Idea',
                link:'idea',
                icon:'note'
            }
        ],
    },
    {
        name:'My Links',
        icon:'grid_view',
        subMenuClicked:false,
        subMenu:[
            {
                name:'Insurance Details',
                icon:'list',
                link:''
            },
            {
                name:'Holiday Calender 2023',
                icon:'calendar_today',
                link:'holiday-list'

            },
            {
                name:'Policy Documents',
                icon:'file_copy',
                link:'policy-documents'
            }
        ],
    },
    {
        name:'Finance',
        icon:'attach_money',
        // link:'',
        subMenu:[
            
            {
                name:'Salary Slip',
                icon:'maximize',
            },
            {
                name:'Form 16',
                icon:'maximize',
                // link:'https://hrms.easysourceindia.com/Payroll/'
            },
            {
                name:'Investment Declaration',
                icon:'maximize',
                // link:'https://hrms.easysourceindia.com/Payroll/'
            }
        ]
    },
    {   
        name:'Reviews',
        icon:'grid_view',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Performance',
                icon:'',
                link:'monthly-review/my-performance'
            }
        ]
    },
    {
        name:'Refer A Friend',
        icon:'rate_review',
        subMenuClicked:false,
        // link:'refer-candidate',
        subMenu:[
            {
                name:'Job Openings',
                icon:'list',
                link:'refer-candidate/job-openings'
            },
            {
                name:'Referral List',
                icon:'horizontal_rule',
                link:'refer-candidate/referral-list'

            }
        ],

    },
    {
        name:'Recruitment',
        icon:'newspaper',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Interview',
                icon:'horizontal_rule',
                link:'interview'
            }
        ]
    },
    {
        name:'Fresher Training',
        icon:'school',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Trainings',
                icon:'calendar_today',
                link:'freshers/my-trainings'
            }
        ]
    },
    {
        name:'Training',
        icon:'school',
        subMenuClicked:false,
        subMenu:[
            {
                name:'Upcoming Trainings',
                icon:'calendar_today',
                link:'upcoming-trainings'
            },
            {
                name:'Ongoing Trainings',
                icon:'calendar_today',
                link:'ongoing-trainings'
            },
            {
                name:'My Trainings',
                icon:'calendar_today',
                link:'my-trainings'
            },
            {
                name:'Requested Trainings',
                icon:'calendar_today',
                link:'requested-trainings'
            }
        ]
    },
    {
        name:'Assets Inventory',
        icon:'science',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Assets Inventory',
                icon:'horizontal_rule',
                link:'user/assets'
            },
            {
                name:'Request Asset',
                icon:'horizontal_rule',
                link:'user/request-assets'
            },
            {
                name:'Asset Declaration',
                icon:'horizontal_rule',
                link:'user/assets-declaration'
            }
        ]
    },
    {
        name:'Atendance',
        icon:'schedule',
        subMenuClicked:false,
        subMenu:[
            {
                name:'Attendance Calendar',
                icon:'calendar_today',
                link:'attendance/my-attendance'
            },
            {
                name:'Manual Punch',
                icon:'calendar_today',
                link:'attendance/manual-punch'
            },
            {
                name:'Punch Log',
                icon:'calendar_today',
                link:'attendance/punch-log'
            }
        ]   
    },
    {
        name:'My Leave ',
        icon:'calendar_today',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Leave',
                icon:'horizontal_rule',
                link:'leaves'
            },
            {
                name:'Floating Leave',
                icon:'horizontal_rule',
                link:'floating-leaves'
            }
        ] 
    },
    {
        name:'Tickets',
        icon:'view_day',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My Tickets',
                icon:'horizontal_rule',
                link:'tickets'
            }
        ] 
    },
    {
        name:'DSR',
        icon:'calendar_today',
        subMenuClicked:false,
        subMenu:[
            {
                name:'My DSR',
                icon:'calendar_today',
                link:'dsr'
            }
        ]
    },
    {
        name:'Projects',
        icon:'view_day',
        subMenuClicked:false,
        link:'projects'
    },
    {
        name:'Logout',
        icon:'logout',
        subMenuClicked:false,
        link:''
    },

    
    
]