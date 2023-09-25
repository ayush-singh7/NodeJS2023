

export const MIN_DATE: Date = new Date(1950, 0, 1);
export const MAX_DATE: Date = new Date(2005, 0, 0);
export const TODAY: Date = new Date();


export const GENDER_DATA = [
    {
        viewValue: 'male',
        value: '1'
    },
    {
        viewValue: 'female',
        value: '2'
    }
]
export const EDUCATION_LEVEL = [
    {
        viewValue: 'High School Diploma/ GED',
        value: 1001
    },
    {
        viewValue: 'B. Tech',
        value: 1002
    },
    {
        viewValue: 'M. Tech',
        value: 1003
    },
    {
        viewValue: 'BCA',
        value: 1004
    },
    {
        viewValue: 'MCA',
        value: 1005
    },
    {
        viewValue: 'BBA',
        value: 1006
    },
    {
        viewValue: 'MBA',
        value: 1007
    },
    {
        viewValue: 'B.Sc.',
        value: 1008
    },
    {
        viewValue: 'M.Sc.',
        value: 1009
    },
    {
        viewValue: 'MA',
        value: 1010
    },
    {
        viewValue: 'Phd',
        value: 1011
    },
    {
        viewValue: 'Diploma',
        value: 1012
    }
]

export const LANGUAGES = [
    {
        viewValue: 'English',
        value: 10001
    },
    {
        viewValue: 'Hindi',
        value: 10002
    }
]
export const CONFIRMATION_BOX = {
    heading: 'Delete Record',
    data: 'Record Deleted Cant Be Restored',
    NO: 'Close',
    YES: 'Confirm'
}

export const MARITAL_STATUS_DATA = [

    {
        viewValue: 'Married',
        value: 1
    },
    {
        viewValue: 'Single',
        value: 2
    },
    {
        viewValue: 'Seperated/Divorced',
        value: 3
    },
    {
        viewValue: 'Widowed',
        value: 4
    }
]

export const PAGE_OPTIONS = {
    page: 1,
    limit: 5,
};

export const PAGE_SIZE_OPTIONS = [5, 10];

export const MY_FORMATS = {
    parse: {
        dateInput: "ll",
    },
    display: {
        dateInput: "ll",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "ll",
        monthYearA11yLabel: "MMMM YYYY",
    },
};
export const HOURS_STATUS = [
    {
        viewValue: 'Less than eqaual to 5 ',
        value: 1
    },
    {
        viewValue: 'More than 5 and Less than equal to 8',
        value: 2
    },
    {
        viewValue: 'More than 8',
        value: 3
    },
    {
        viewValue: 'More than 10',
        value: 4
    }
]
export const DSR_STATUS = [
    {
        viewValue: 'Pending',
        value: 1
    },
    {
        viewValue: 'Due',
        value: 2
    },
    {
        viewValue: 'Approved',
        value: 3
    }
]

export const SUBMISSION_STATUS = [
    {
        value: 1,
        viewValue: 'All'
    },
    {
        value: 2,
        viewValue: 'Submitted'
    },
    {
        value: 3,
        viewValue: 'Due'
    }
]
export const PROJECT_LIST = [
    {
        value: 1,
        viewValue: 'All'
    },
    {
        value: 2,
        viewValue: 'Training Project React'
    }
]
export const INTERVIEW_STATUS = [
    {
        value: 1,
        viewValue: 'Selected'
    },
    {
        value: 2,
        viewValue: 'Rejected'
    },
    {
        value: 3,
        viewValue: 'Missed'
    },
    {
        value: 4,
        viewValue: 'In Progress'
    }
]

export const DEPARTMENT_LIST = [
    {
        value: 1,
        viewValue: 'Angular'
    },
    {
        value: 2,
        viewValue: 'React JS'
    },
    {
        value: 3,
        viewValue: 'Block Chain'
    },
    {
        value: 4,
        viewValue: 'Business Analyst'
    },
    {
        value: 5,
        viewValue: 'Android'
    },
    {
        value: 6,
        viewValue: 'Marketing'
    }
]
export const LEAVE_TYPE = [
    {
        value: '1',
        viewValue: 'Planned Leave(CL)'
    },
    {
        value: '2',
        viewValue: 'Privileged Leave'
    },
    {
        value: '3',
        viewValue: 'Emergency Leave(CL)'
    },
    {
        value: '4',
        viewValue: 'Short Leaves'
    },
    {
        value: '5',
        viewValue: 'All Remaining Leaves'
    }
]

export const LEAVE_DATA = [
    {
        type: 'Planned Leave',
        leave_total: 6,
        leave_used: 1
    },
    {
        type: 'Planned Leave',
        leave_total: 6,
        leave_used: 1
    },
]
export const MONTHS_DATA = [
    {
        value: '1',
        viewValue: '1'
    },
    {
        value: '2',
        viewValue: '2'
    },
    {
        value: '3',
        viewValue: '3'
    },
    {
        value: '4',
        viewValue: '4'
    },
    {
        value: '5',
        viewValue: '5'
    },
    {
        value: '6',
        viewValue: '6'
    },
    {
        value: '7',
        viewValue: '7'
    },
    {
        value: '8',
        viewValue: '8'
    },
    {
        value: '9',
        viewValue: '9'
    },
    {
        value: '10',
        viewValue: '10'
    },
    {
        value: '11',
        viewValue: '11'
    },
    {
        value: '12',
        viewValue: '12'
    }
]

export const YEARS_DATA = [
    {
        value: '1',
        viewValue: '1'
    },
    {
        value: '2',
        viewValue: '2'
    },
    {
        value: '3',
        viewValue: '3'
    },
    {
        value: '4',
        viewValue: '4'
    },
    {
        value: '5',
        viewValue: '5'
    },
    {
        value: '6',
        viewValue: '6'
    },
    {
        value: '7',
        viewValue: '7'
    },
    {
        value: '8',
        viewValue: '8'
    },
    {
        value: '9',
        viewValue: '9'
    },
    {
        value: '10',
        viewValue: '10'
    },
    {
        value: '11',
        viewValue: '11'
    },
    {
        value: '13',
        viewValue: '13'
    },
    {
        value: '14',
        viewValue: '14'
    },
    {
        value: '15',
        viewValue: '15'
    }, {
        value: '16',
        viewValue: '16'
    }, {
        value: '17',
        viewValue: '17'
    },
    {
        value: '18',
        viewValue: '18'
    },
    {
        value: '19',
        viewValue: '19'
    },
    {
        value: '20',
        viewValue: '20'
    },
]


export const DEGREE_LIST = [
    {
        institute: 'DIT university',
        id: '11',
        education_level: 1001,
        date_from: '2003-03-07',
        date_to: '2006-03-07',
        prof_course: 'ABC',
        language: 'Hindi'
    },
    {
        institute: 'DID university',
        id: '12',
        education_level: 1001,
        date_from: '2003-03-07',
        date_to: '2006-03-07',
        prof_course: 'ABC',
        language: 'Hindi'
    },
    {
        institute: 'Amity University',
        education_level: 1007,
        id: '14',
        date_from: '2001-03-07',
        date_to: '2003-03-07',
        prof_course: 'DEF',
        language: 'English'
    },
    {
        institute: 'JP University',
        education_level: 1002,
        id: '13',
        date_from: '2002-03-07',
        date_to: '2005-03-07',
        prof_course: 'DEF',
        language: 'English'
    }]

    export const ASSET_DECLARATION:any= [
        {
          employee_id:'AI1345',
          asset_code:'123',
          serial_number:'aa123',
          model_number:'JK123',
          os:'android',
          os_version:'1.0',
          brand:'samsung',
          colour:'red',
          images:'4',
          working_condition:true,
          added:'yeass'
        }
      ];