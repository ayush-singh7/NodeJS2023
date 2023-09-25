export const BREADCRUMB_PERFORMANCE = 
    {
        link:'admin/monthly-review/my-performance',
        // breadcrumb : 'Home>Reviews>Performance'
        breadcrumb: [
            {
                name:'Home',
                link:'/admin'
            },
            {
                name:'Reviews',
                link:null
            },
            {
                name:'Performance',
                link:null
            }
        ]

}

export const BREADCRUMB_TRAINING_DETAILS = {
    link:'admin/freshers/training_details_trainee/:id',
    breadcrumb:[
        {
            name:'Home',
            link:'/admin'
        },
        {
            name:'My Trainings',
            link:'/admin/freshers/my-trainings'
        },
        {
            name:'Details',
            link:null
        }
    ]
}

export const BREADCRUMB_JOB_DETAILS = {
    link:'admin/refer-candidate/job-details/101',
    breadcrumb:[
        {
            name:'Home',
            link:'/admin'
        },
        {
            name:'Job Details',
            link:null
        },
        {
            name:'Details',
            link:null
        }
    ]
}