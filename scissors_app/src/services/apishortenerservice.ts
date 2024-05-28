import axios from 'axios';

export const shortenUrl = async (url:string) => {
    const token = 'nH9oSILFht1eZUAQvXsPZiSMdeoLB5Z4rhzECvJ7PU4L7oVr9IFRhNeLH2lU';
    try {
        const response = await axios.post(
            'https://api.tinyurl.com/create',
            {
                "url": url,
                // "domain": "domain.com",
                // "alias": "myexamplelink",
                // "tags": "example,link",
                // "expires_at": "2024-10-25 10:11:12"
            },
            {headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        
        // Process the response
        console.log(response.data);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
}
