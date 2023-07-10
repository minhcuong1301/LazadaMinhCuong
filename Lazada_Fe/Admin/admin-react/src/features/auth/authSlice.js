import { createSlice } from "@reduxjs/toolkit";
import {generateFileToUrl} from "../../helpers/common";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        createAuthUser: (state, action) => {
            console.log(state);     //proxy
            console.log(action);    //type,payload(data action gửi đi:thông tin của auth)
            const user = action.payload;
            let avatar = user.avatar;
          


            try {
                avatar = JSON.parse(user.avatar)

                if (typeof avatar === 'object') {
                    avatar = generateFileToUrl(avatar.value.data)
                }
            } catch (e) {
                avatar = user.avatar;
            }
           
            return Object.assign({}, state, {
                user: {...user, avatarUrl: avatar},
            });
        },
        updateAuthUser: (state, action) => {
            console.log(state);
            const user = action.payload;
            let avatar = user.avatar;

            try {
                avatar = JSON.parse(user.avatar)

                if (typeof avatar === 'object') {
                    avatar = generateFileToUrl(avatar.value.data)
                }
            } catch (e) {
                avatar = user.avatar;
            }

            return Object.assign({}, state, {
                user: {...user, avatarUrl: avatar},
            });
        },
    }
});

export const { createAuthUser, updateAuthUser } = authSlice.actions;
export default authSlice.reducer;