import React from "react";
import styles from './styles'
import { ReactComponent as ThumbUp } from './../assets/thumb-up.svg';
import { ReactComponent as ThumDbown } from './../assets/thumb-down.svg';


export type CommentProps = {
    headline: string;
    comment: string;
    author: string;
    positiveFeedback?: string;
    negativeFeedback?: string;
    score: number;
    publishedAt: string;
    Logo: React.ReactElement;
}

export default function Comment({
    headline,
    score,
    Logo,
    comment,
    positiveFeedback,
    negativeFeedback,
    author,
    publishedAt,
}: CommentProps) {
    
    return (
        <div style={styles.container}>
            <div style={styles.upperRow}>
                <div style={styles.score}><strong>{score} </strong> / 5</div>
                {Logo}
            </div>
            <strong style={styles.title}>{headline}</strong>
            <div style={styles.comment}>{comment}</div>
            {!!positiveFeedback && (
                <div style={styles.feedback}>
                    <ThumbUp /><div style={styles.feedbackText}>{positiveFeedback}</div>
                </div>
            )}
            {!!negativeFeedback && (
                <div style={styles.feedback}>
                    <ThumDbown /><div style={styles.feedbackText}>{negativeFeedback}</div>
                </div>
            )}
            <div style={styles.comment}>
                <strong>{author}</strong>
                <div  style={styles.date}>Reviewed {publishedAt}</div>
            </div>
        </div>
    );
}