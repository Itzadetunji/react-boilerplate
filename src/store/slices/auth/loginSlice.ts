import { APIVersion1Login } from "@/src/http/v1";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

export const LoginSlice = (
	onSuccess: (data: {
		status: boolean;
		message: string;
		user: any;
		token: string;
	}) => void = () => {
		return;
	},
	onError: (error: AxiosError) => void = () => {
		return;
	}
) => {
	return useMutation<
		{
			status: boolean;
			message: string;
			user: any;
			token: string;
		},
		AxiosError,
		{ token: string }
	>(APIVersion1Login, {
		onSuccess,
		onError: (error: AxiosError) => {
			onError(error);
			toast.error("An error occured kindly try again later", {
				id: "google-signup",
			});
		},
	});
};
