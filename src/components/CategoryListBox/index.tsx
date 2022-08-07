import React from "react";
import { Link } from "react-router-dom";
import CategoryBoxItem from "./CategoryBoxItem";
import styles from "./CategoryListBox.module.css";
type Props = {
    data: any;
};

const CategoryListBox = ({ data }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{data.title}</h2>
                <Link to="/">Xem tất cả</Link>
            </div>
            <div className={styles.content}>
                {data.data.map((item: any) => (
                    <CategoryBoxItem data={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default CategoryListBox;