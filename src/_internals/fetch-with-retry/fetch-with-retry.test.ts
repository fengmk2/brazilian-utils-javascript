import { afterEach, beforeEach, describe, expect, it, vi } from "../test/runtime";
import { fetchWithRetry, isRetryableFetchError } from "./fetch-with-retry";

describe("fetchWithRetry", () => {
	const originalFetch = globalThis.fetch;

	beforeEach(() => {
		vi.restoreAllMocks();
	});

	afterEach(() => {
		globalThis.fetch = originalFetch;
		vi.restoreAllMocks();
	});

	it("retries transient undici socket failures", async () => {
		const fetchMock = vi
			.fn()
			.mockRejectedValueOnce(
				Object.assign(new TypeError("fetch failed"), {
					cause: { code: "UND_ERR_SOCKET" },
				}),
			)
			.mockResolvedValueOnce({
				ok: true,
				status: 200,
			});

		globalThis.fetch = fetchMock as unknown as typeof fetch;

		const response = await fetchWithRetry("https://example.com", { retries: 1, retryDelayMs: 0 });

		expect(response.ok).toBe(true);
		expect(fetchMock).toHaveBeenCalledTimes(2);
	});

	it("does not retry non-transient failures", async () => {
		const error = new Error("Invalid URL");
		const fetchMock = vi.fn().mockRejectedValue(error);

		globalThis.fetch = fetchMock as unknown as typeof fetch;

		await expect(
			fetchWithRetry("https://example.com", { retries: 3, retryDelayMs: 0 }),
		).rejects.toThrow(error);
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});

	it("detects retryable undici errors by code", () => {
		expect(
			isRetryableFetchError(
				Object.assign(new TypeError("fetch failed"), {
					cause: { code: "UND_ERR_SOCKET" },
				}),
			),
		).toBe(true);
	});
});
