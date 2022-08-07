import React from "react";
import styles from "./CategoryBoxItem.module.css";
import phukien1 from "../../../assets/image/phukien1.png";
type Props = {
    data: any;
};

const CategoryBoxItem = ({ data }: Props) => {
    return (
        <div className={styles.cateItem} style={{ background: data.color }}>
            <div className={styles.cateItem_title}>
                <span>{data.name}</span>
            </div>
            <div className={styles.cateItem_images}>
                <img src={phukien1} alt="" />
            </div>
        </div>
    );
};

export default CategoryBoxItem;