//actions types声明
export const AddFootballs = 'ADD_BALLS';
export const deleteFootballs = 'DELETE_BALLS';
export const changecolor = 'CHANGE_COLOR';

//action creator
export const addComments=()=>({
     type:AddFootballs
})
export const deleteComments=()=> ({
     type:deleteFootballs
})
export const colorComments=(wantcolor)=> ({
     type:changecolor,
     color:wantcolor
})
