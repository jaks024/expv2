import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { ISettingGoogleLogin } from "../../../interfaces/ISettingGoogleLogin";
import { userDataInstance } from "../../api/GlobalUserData";

export function SettingGoogleLogin({ onLoginAction } : ISettingGoogleLogin) {
    const REFRESH_TOKEN_COOKIE_NAME = "gis_refresh_token";
    
    const [refreshToken, setRefreshToken] = useState("");

    const setRefreshTokenCookie = (token: string) => {
        document.cookie = `gis_refresh_token=${token}`;
    };

    const setAccessToken = (accessToken: string) => {
        userDataInstance.accessToken = accessToken;
    };

    const isTokenInvalid = () => {
        return (refreshToken === undefined || refreshToken.length === 0);
    };

    const clearTokens = () => {
        setAccessToken("");
        setRefreshToken("");
        setRefreshTokenCookie("");
    };

    const onLoadGetAccessToken = (refreshToken: string) => {
        // if error on getting access token then need to reset refresh token since it became invalid 
        userDataInstance.apiClient.GetAccessToken(
            refreshToken,
            (data: any) => {
                setAccessToken(data);
                onLoginAction();
            },
            (err: any) => {
                console.log(err);
                clearTokens();
            });
    };

    const onLoadGetRefreshToken = () => {
        const cookieRefreshToken = document.cookie.split('; ')
            .find((row) => row.startsWith(`${REFRESH_TOKEN_COOKIE_NAME}=`))
            ?.split('=')[1];
        if (cookieRefreshToken === undefined || cookieRefreshToken.length == 0) {
            return;
        }
        setRefreshToken(cookieRefreshToken);
        onLoadGetAccessToken(cookieRefreshToken);
    };

    useEffect(() => {
        onLoadGetRefreshToken();
    }, []);

    const onGoogleLoginSuccess = async (response: any) => {
        userDataInstance.apiClient.GetRefreshToken(response, (data: any) => {
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);

            setRefreshTokenCookie(data.refreshToken);
        });
        onLoginAction();
    };

    const onGoogleLoginErrorHandler = (response: any) => {
        console.log(`Login failed: ${response}`);
    };

    const googleLogin = useGoogleLogin({
        flow: "auth-code",
        scope: "https://www.googleapis.com/auth/drive.appdata",
        onSuccess: onGoogleLoginSuccess,
        onError: onGoogleLoginErrorHandler,
    });

    const googleLoginButtonText = () => {
        return isTokenInvalid() ?
            "Log in with Google to save data to GDrive" :
            "Log out of Google to stop saving data to GDrive"
    };

    return (
        <button className="google-sign-in-button" onClick={() => isTokenInvalid() ? googleLogin() : clearTokens()}>
            {googleLoginButtonText()}
        </button>
    );
}