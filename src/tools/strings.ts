const stringIsNullOrEmpty = (text: string | null | undefined) =>
	!text || typeof text !== "string" || text.trim() === "";

const formatPhoneNumber = (phoneNumber: string) => {
	return stringIsNullOrEmpty(phoneNumber) || phoneNumber.length === 1
		? phoneNumber
		: phoneNumber
				.replace(/\s/g, "")
				.replace(/(.{2})/g, "$1 ")
				.trim();
};

export { formatPhoneNumber, stringIsNullOrEmpty };
