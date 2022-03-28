import { useState, useEffect } from "react";
import fetchReviews from "../Services/fetchReviews";

export enum Channels {
    AIRBNB='AIRBNB',
    HOLIDU='HOLIDU',
    BOOKINGCOM='BOOKINGCOM'
}

export type ReviewComments = {
    headline: string;
    comment: string;
    author: string;
    positiveFeedback: string;
    negativeFeedback: string,
    score: string,
    channel: Channels;
    publishedAt: string;
}

export type useReviewsTypes = {
    length: number,
    page: number,
    changePage: (page:number) => void,
    data: ReviewComments[]
  }

function useReviews(start:number, limit:number): useReviewsTypes {
    const [data, setData] = useState([]);
    const [length, setLength] = useState(0);
    const [page, changePage] = useState(start);

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetchReviews(page, limit);
        setLength(parseInt(result.headers['x-total-count']))
        setData(result.data);
      };
      fetchData();
    }, [page, limit]);

    return {data, length, changePage, page};
}

export default useReviews;