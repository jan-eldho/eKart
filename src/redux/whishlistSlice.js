import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions are provided inside reducers, logic to the update the state
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        },
        //to remove item from state
        removeFromWhishList:(state,action)=>{
            return state.filter(item=>item.id !=action.payload)
            //filter method to iterate true conditon to store into state
            //this case action.payload is a user need remove item id
            //in this case item.id and action.payload has same 'id' it doesn't store data into state othewise it will store

            
        }
    }
})
export const {addtoWishList,removeFromWhishList} = wishlistSlice.actions
export default wishlistSlice.reducer;