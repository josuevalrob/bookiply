import {  CommentProps } from "../Components/Reviews/Components/Comment";
import { Channels, ReviewComments } from "../Hooks/reviews";
import { ReactComponent as Airbnb } from './../assets/AIRBNB.svg';
import { ReactComponent as Bookingcom } from './../assets/BOOKINGCOM.svg';
import { ReactComponent as Holidu } from './../assets/AIRBNB.svg';

export const logos = {
    [Channels.AIRBNB]: Airbnb,
    [Channels.BOOKINGCOM]: Bookingcom,
    [Channels.HOLIDU]: Holidu
}


function mapReviews(reviews: ReviewComments[]): CommentProps[] {
    return reviews.map((review: ReviewComments) => {

        const date = new Date(review.publishedAt);
        const formattedDate = new Intl.DateTimeFormat("de-DE", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        }).format(date);
        const LogoComponent = logos[review.channel]
        return {
            ...review,
            ...(review.positiveFeedback === 'null' && {positiveFeedback: review.positiveFeedback}),
            ...(review.negativeFeedback === 'null' && {negativeFeedback: review.negativeFeedback}),
            score: parseInt(review.score),
            publishedAt: formattedDate,
            Logo: <LogoComponent />
        }
    })
}

export default mapReviews;