import React from "react";
import styles from './styles'
import Comment from './Components/Comment'
import { LinearProgress, Pagination } from "@mui/material";
import mapReviews from "../../Adapters/reviewsAdapter";
import useReviews from "../../Hooks/reviews";

export default function Reviews() {

    const PER_PAGE = 4;
    const {data, page, changePage, length} = useReviews(1, PER_PAGE);
    const count = Math.ceil(length / PER_PAGE);
    
    const handleChange = (e: any, p: number) => {
      changePage(p);
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>{`${length} Reviews`}</h1>
                <Pagination
                    count={count}
                    onChange={handleChange}
                    page={page}
                    color="primary" 
                />
            </div>
            {!data.length && <span style={styles.progress}><LinearProgress/></span>}
            {
                mapReviews(data)?.map((comment, i) => (
                    <Comment key={i} {...comment} />
                ))
            }
        </div>
    );
}