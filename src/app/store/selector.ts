import { createFeatureSelector } from "@ngrx/store";

export const SHARED_STATE_NAME = 'shared_state';

export const GET_PITCH_IDEA = 'get_pitch_idea';

export const ADD_NEW_LEAVE = 'add_new_leave';

export const GET_REFER_FRIEND = 'get_refer_friend'

export const ADD_REQUESTED_TRAINING_DATA = 'add_requested_training_data';

export const DSR_EDIT = 'edit_dsr';

export const editDsrSelector = createFeatureSelector(DSR_EDIT);

export const getSharedDataSelector = createFeatureSelector(SHARED_STATE_NAME);

export const getPitchDataSelector = createFeatureSelector(GET_PITCH_IDEA);

export const addNewLeaveSelector = createFeatureSelector(ADD_NEW_LEAVE);

export const addRequestedTrainingDataSelector = createFeatureSelector(ADD_REQUESTED_TRAINING_DATA);

export const getReferFriendDataSelector = createFeatureSelector(GET_REFER_FRIEND);


