const RETRYABLE_ERROR_CODES = new Set([
	"UND_ERR_SOCKET",
	"UND_ERR_CONNECT_TIMEOUT",
	"UND_ERR_HEADERS_TIMEOUT",
	"UND_ERR_BODY_TIMEOUT",
	"ECONNRESET",
	"ECONNREFUSED",
	"EHOSTUNREACH",
	"ENETUNREACH",
	"ETIMEDOUT",
]);

export type FetchWithRetryOptions = RequestInit & {
	retries?: number;
	retryDelayMs?: number;
};

const wait = (ms: number): Promise<void> =>
	ms <= 0 ? Promise.resolve() : new Promise((resolve) => setTimeout(resolve, ms));

const getErrorCode = (error: unknown): string | undefined => {
	if (!error || typeof error !== "object") return undefined;

	const code = "code" in error ? error.code : undefined;

	if (typeof code === "string") {
		return code;
	}

	const cause = "cause" in error ? error.cause : undefined;

	if (!cause || typeof cause !== "object") return undefined;

	const causeCode = "code" in cause ? cause.code : undefined;

	return typeof causeCode === "string" ? causeCode : undefined;
};

export const isRetryableFetchError = (error: unknown): boolean => {
	const code = getErrorCode(error);

	if (code && RETRYABLE_ERROR_CODES.has(code)) {
		return true;
	}

	if (!(error instanceof Error)) {
		return false;
	}

	return error.message.toLowerCase().includes("fetch failed");
};

export const fetchWithRetry = async (
	input: string | URL | Request,
	{ retries = 2, retryDelayMs = 250, ...init }: FetchWithRetryOptions = {},
): Promise<Response> => {
	let lastError: unknown;

	for (let attempt = 0; attempt <= retries; attempt += 1) {
		try {
			return await fetch(input, init);
		} catch (error) {
			lastError = error;

			if (attempt === retries || !isRetryableFetchError(error)) {
				throw error;
			}

			await wait(retryDelayMs * (attempt + 1));
		}
	}

	throw lastError;
};
