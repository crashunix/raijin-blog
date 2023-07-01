import qs from "qs";

const getStrapiURL = (path = '') => {
    return `${process.env.API_URL || 'http://127.0.0.1:1337'}${path}`;
}
export async function fetchStrapi(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        // Build request URL
        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${getStrapiURL(`${path}${queryString ? `?${queryString}` : ""}`)}`;

        console.log("REQUEST ", requestUrl);

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}