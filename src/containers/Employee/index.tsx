import { useState } from "react";
import {TextInput,Pagination, Skeleton, Button} from "@mantine/core";
import styles from "./styles.module.scss";
import data from "./data";

export default function Employee()
{
    const [loading, setLoading] = useState(true);
    const[activePage, setPage] = useState(1);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Employee</h2>
            <div className={styles.mainBox}>
                <div className={styles.boxHeader}>
                    <div className={styles.containerSearchBox}>
                        <TextInput 
                        placeholder="Search" 
                        className={styles.searchBox}>
                        </TextInput>
                    </div>
                </div>

                <div className={styles.boxBody}>
                    <div className={styles.boxBodyContainer}>

                    
                {
                    data.slice(0,5).map((people) =>{
                        return(
                        <div key={people.id} className={styles.userBox}>
                    <div className={styles.imgContainer}>
                        <Skeleton visible={loading}
                        height={70}
                        circle mb="xl">
                        <img 
                        src = {people.image}
                        alt="userImage"></img>
                        </Skeleton>
                    </div>

                    <div className={styles.userNameContainer}>
                        <Skeleton visible={loading}
                        height ={40}
                        className={styles.userName}
                        >
                        <p className={styles.userName}>Do Ngoc Cho Vien</p>
                        </Skeleton>
                        
                        <Skeleton visible={loading}
                        >
                        <p className={styles.information}> id: {people.id} </p>
                        <p className={styles.information}>{people.role} </p>

                        </Skeleton>
                        
                        
                    </div>
                    <div className={styles.ButtonEditContainer}>
                    <Skeleton visible={loading}>
                        <Button  className={styles.buttonEdit}>Profile</Button>
                    </Skeleton>
                    </div>
                    </div>)
                    })
                }
                </div>
                </div>

                <div className={styles.boxFooter}>
                    <Pagination total={10} 
                    page={activePage}
                    onChange={setPage}/> 
                </div>
            </div>
        </div>
    )
}