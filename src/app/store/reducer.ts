import { createReducer, on } from "@ngrx/store";
import {  getPitchIdeaAction, getReferFriendDataAction, getRequestedTrainingDataAction } from "./actions";
import { pitchInitialState,initialState,referFreiend, requestedTrainingData, dsrEditData } from "./store";
// import { addNewLeaveAction, editDsrAction, getPitchIdeaAction, getReferFriendDataAction, getRequestedTrainingDataAction } from "./actions";


import { increment, decrement, reset } from './actions';

export const intialValue = 0;

export const counterReducer = createReducer(intialValue,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);



export const sharedReducer = createReducer(pitchInitialState)

export const getPitchIdeaReducer = createReducer(
    initialState.pitchIdea ,
        on(getPitchIdeaAction,(state,data)=>{

            console.log(state,'------',data,"cRa--")
 
            let newPitchIdea = [...state]
            let pitchData = {
                title: data.pitchName,
                industry: data.professional,
                Technical_Non_Technical: 'Technical',
                Submitted_On: new Date(),
            };
            newPitchIdea.push(pitchData)
            
            return newPitchIdea;
        })

)

export const getReferFriendDataReducer = createReducer(
  referFreiend,
      on(getReferFriendDataAction,(state,data)=>{
          let newReferFriendData = [...state];
          let referFriendData = {
              candidate_name:data.candidate_name,
              experience:data.experience,
              department:data.department,
              position:data.job_title,
              date_of_referal:new Date(),
              candidate_status:"Pending",
          }
          newReferFriendData.push(referFriendData);
          
          return newReferFriendData
      })
)

export const getRequestedTrainingDataReducer = createReducer(
    requestedTrainingData,
        on(getRequestedTrainingDataAction,(state,data)=>{

            
            let newRequestedTrainingData = [...state]
            let requestedTrainingData = {
                training_name:data.training_name,
                timeline:data.timeline,
                requested_date:new Date(),
                status:'Pending',
            }
            newRequestedTrainingData.push(requestedTrainingData)
            return newRequestedTrainingData;
        })
)