import $http from "../xhr";

//Auth Start

export const APIVersion1Register = async (data: unknown) =>
	$http.post(`/v1/auth/register`, data).then((res) => res.data);

export const APIVersion1Login = async (data: unknown): Promise<any> =>
	$http.post("/v1/auth/login", data).then((res) => res.data);

//Auth End

// export const APIVersion1AddPatient = async (
// 	data: AddPatientData,
// 	queueUrl: string
// ): Promise<Station> =>
// 	$http
// 		.post("/customers/waitlist/join-queue/" + queueUrl, data)
// 		.then((res) => res.data);
