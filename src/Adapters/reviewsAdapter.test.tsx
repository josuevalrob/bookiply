import React from "react";
import { render, screen } from "@testing-library/react";
import mapReviews from './reviewsAdapter'


test("Mapping test from API", () => {
    const reviews = require('./reviewsExample.json');
    const reviewsMapped = mapReviews(reviews);
    expect(reviewsMapped).toHaveLength(4);

    reviewsMapped.forEach((review, index) => {
        expect(review.headline).toBe(reviews[index].headline);
        expect(review.comment).toBe(reviews[index].comment);
        expect(review.author).toBe(reviews[index].author);
        expect(review.score).toBe(parseInt(reviews[index].score))
        expect(review.publishedAt).toBe('11. August 2020');
    })

    const Airbnb = reviewsMapped[0].Logo;
    render(<>{Airbnb}</>);
    const SVG = screen.getByText(/AIRBNB.svg/i);
    expect(SVG).toBeInTheDocument();
   
    const Booking = reviewsMapped[3].Logo;
    render(<>{Booking}</>);
    const SVGBooking = screen.getByText(/BOOKINGCOM.svg/i);
    expect(SVGBooking).toBeInTheDocument();
});

