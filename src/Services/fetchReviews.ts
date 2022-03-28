import axios from "axios";

const fetchReviews = async (page:number, limit:number) => {
    const result = await axios(
      `https://interview-task-api.bookiply.io/reviews?_page=${page}&_limit=${limit}`,
    );
    return result
};

export default fetchReviews;