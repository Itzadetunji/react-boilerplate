import { CONFIGS } from "@/src/configs";
import { getCookie } from "@/src/utils/cookies";
import axios, { AxiosInstance } from "axios";
// import { getCookie, setCookie } from "cookies-next";

const baseURL = CONFIGS.URL.API_BASE_URL;

// Create new axios instance
const $http: AxiosInstance = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

$http.interceptors.request.use(async (config) => {
	// await refreshAuthTokenLogic();

	const accessToken = getCookie("ac-token");

	// If access-token is available, add it to the Axios Authorization header
	if (accessToken) {
		config.headers["Authorization"] = `Bearer ${accessToken}`;
	}

	return config;
});

// export const refreshAuthTokenLogic = async () => {
// 	const accessTokenJWT = getCookie("ac-token") as string;
// 	const refreshTokenJWT = getCookie("refresh-token") as string;

// 	// if access-token or refresh-token is not available, bail out
// 	if (!accessTokenJWT || !refreshTokenJWT) return;

// 	const accessToken: JwtPayload = jwtDecode(accessTokenJWT);
// 	const refreshToken: JwtPayload = jwtDecode(refreshTokenJWT);

// 	// confirm that both access-token and refresh-token have exp property
// 	if (!accessToken.exp || !refreshToken.exp) return;

// 	// Check if accessToken is expired and refreshToken has not expired
// 	const accessTokenIsExpired = accessToken.exp * 1000 < Date.now();
// 	const refreshTokenIsNotExpired = refreshToken.exp * 1000 > Date.now();

// 	if (accessTokenIsExpired && refreshTokenIsNotExpired) {
// 		try {
// 			const { data: response, status } = await axios.post(
// 				baseURL + "/v1/auth/token/refresh/",
// 				{ refreshToken: refreshTokenJWT }
// 			);

// 			if (status === 200 && response.data) {
// 				// update access-token and refresh-token
// 				setCookie("ac-token", response.data.accessToken, 7);
// 				setCookie("refresh-token", response.data.refreshToken, 7);
// 			}
// 		} catch (error) {
// 			if (axios.isAxiosError(error)) {
// 				// console.log("error.response:", error.response);
// 			}
// 		}
// 	}
// };

export default $http;
