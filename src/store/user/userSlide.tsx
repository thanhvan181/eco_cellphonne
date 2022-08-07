import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../../service/auth";
// import { list } from "../../../api/category";
// import { getproductsCate, listproduct } from "../../../api/product";
import { authenticated, removeAuthencicate, removeCart } from "../../untils/localStoge";

export const signIn = createAsyncThunk(
    'auth/signin',
    async (Datauser: any) => {
        const { data } = await signin(Datauser)
        authenticated(data, () => {

        })
        return data
    }
)
export const signUp = createAsyncThunk(
    'auth/signup',
    async (Datauser: any) => {
        const { data } = await signup(Datauser)
        return data
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userInfo: {},
        currentUser: null,
        isAuthenticated: false,
        isLoading: false,
        errorMessage: '',
        cartItems: []

    },
    reducers: {
        logout: (state: any, action: any) => {
            state.userInfo = {}
            state.currentUser = null
            state.isAuthenticated = false
            state.isLoading = false
            state.errorMessage = ''
            state.cartItems = []
            removeAuthencicate()
            removeCart()

        },
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.errorMessage = '';
        });

        builder.addCase(signIn.rejected, (state, action: any) => {

            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });

        builder.addCase(signUp.pending, (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.userInfo = action.payload.user;
            state.errorMessage = '';
        });

        builder.addCase(signUp.rejected, (state, action: any) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
})
export const { logout } = authSlice.actions
export default authSlice.reducer;