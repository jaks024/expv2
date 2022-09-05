import { PageHeadBlock } from "../heading/PageHeadBlock";
import { useGoogleOneTapLogin, GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";

export function SettingPage() {

    const REFRESH_TOKEN_COOKIE_NAME = "gis_refresh_token";
    
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");

    const onLoadGetRefreshToken = () => {
        const cookieRefreshToken = document.cookie.split('; ')
            .find((row) => row.startsWith(`${REFRESH_TOKEN_COOKIE_NAME}=`))
            ?.split('=')[1];
        if (cookieRefreshToken === undefined || cookieRefreshToken.length == 0) {
            return;
        }
        setRefreshToken(cookieRefreshToken);
        onLoadGetAccessToken(cookieRefreshToken);
    }

    const onLoadGetAccessToken = (refreshToken: string) => {
        fetch('http://localhost:3000/auth/access', {
            method: 'GET',
            headers: {
                refreshToken: refreshToken
            } 
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAccessToken(data);
        });
    }

    useEffect(() => {
        onLoadGetRefreshToken();
    }, []);

    const saveRefreshTokenToCookie = (token: string) => {
        document.cookie = `gis_refresh_token=${token}`;
    }

    const onGoogleLoginSuccess = async (response: any) => {
        fetch('http://localhost:3000/auth/google', {
            method: 'GET',
            headers: {
                code: response.code
            } 
        })
        .then((res) => res.json())
        .then((data) => {
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);

            saveRefreshTokenToCookie(data.refreshToken);
        });
    }

    const onGoogleLoginErrorHandler = (response: any) => {
        console.log('login failed');
        console.log(response);
    }

    const googleLogin = useGoogleLogin({
        flow: "auth-code",
        scope: "https://www.googleapis.com/auth/drive.appdata",
        onSuccess: onGoogleLoginSuccess,
        onError: onGoogleLoginErrorHandler,
    });

    return (
        <div className="page">
            
            <PageHeadBlock 
                name="Settings"
                month=""
                year=""
                isRefreshButtonEnabled={false}
            />
            <button onClick={() => googleLogin()}>Login to Google to Save!</button>
            <div>
                {refreshToken}
            </div>
            <div>
                {accessToken}
            </div>
        </div>
    );
}
