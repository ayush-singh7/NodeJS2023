import { createAction, props } from "@ngrx/store";



export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');



export const getPitchIdeaAction = createAction(
    '[PITCH IDEA] get pitch idea data',
    props<any>()
)

// export const addNewLeaveAction = createAction(
//     '[LEAVE ACTION] add new leave',
//     props<any>()
// )

export const getRequestedTrainingDataAction = createAction(
    '[REQUESTED TRAINING] get requested training data ',
    props<any>()
)

export const getReferFriendDataAction = createAction(
    '[Refer a Friend] get data of refer a friend ',
    props<any>()
)

// export const editDsrAction = createAction(
//     '[Edit DSR] edit dsr request',
//     props<any>()
// )






