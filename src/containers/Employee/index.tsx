import { useState } from "react";
import {TextInput,Pagination, Skeleton, Button, Select} from "@mantine/core";
import styles from "./styles.module.scss";
import data from "./data";

export default function Employee()
{
    const [loading, setLoading] = useState(false);
    const[activePage, setPage] = useState(1);
    return (

        <>
            <div className={styles.contentHeader}>
                <h2 className={styles.contentTitle}>Employee</h2>
                {/* add icon */}
                <Button>Create New</Button>
            </div>
            <div className={styles.mainBox}>
                <header className={styles.boxHeader}>
                    <div className={styles.containerBoxHeader}>
                        <TextInput 
                        placeholder="Search" 
                        className={styles.searchBox}>
                        </TextInput>
                        {/* change icon */}
                        <Select 
                        placeholder="All"
                        className={styles.selectionBox}
                        data={[
                            {value: 'all', label: 'All'},
                            {value: 'ascending', label:'Ascending'},
                            {value: 'descending', label: 'Descending'}]}
                        />
                        <Select
                        placeholder="Gender:All"
                        className={styles.selectionBox}
                        data={[
                            {value: 'all', label: 'All'},
                            {value: 'male', label:'Male'},
                            {value: 'female', label:"Female"}
                        ]}/>


                    </div>
                </header>

                <div className={styles.boxBodyContainer}>
                    <div className={styles.boxBody}>
                {
                    data.slice(0,5).map((people) =>{
                        return(
                        <div key={people.id}
                        className={styles.userBoxContainer}>
                            <div className={styles.userBox}>
                                <div className={styles.imgContainer}>
                                    <Skeleton visible={loading}
                                        height={112}
                                        circle mb="xl"
                                        className={styles.skeletonImg}>
                                        <img 
                                        className={styles.avataImg}
                                        src = "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8c740569d1a4ca32d2.jpg"
                                        alt="userImage"
                                        width="112"
                                        height="112"></img>
                                    </Skeleton>
                                </div>
                                <div className={styles.userNameContainer}>
                                    <Skeleton visible={loading}
                                    height ="3.5rem"
                                    className={styles.userName}>
                                    <h2 className={styles.userName}>
                                    {people.name}
                                    </h2>
                                    </Skeleton>
                                    <Skeleton visible={loading}
                                    className={styles.informationContainer}>
                                        <p className={styles.information}>
                                            id: {people.id} 
                                        </p>
                                        <p className={styles.information}>
                                            {people.role}
                                        </p>
                                    </Skeleton>
                                </div>
                                <div className={styles.ButtonEditContainer}>
                                    <Skeleton visible={loading}>
                                        <Button  className={styles.buttonEdit}>
                                        Profile
                                        </Button>
                                    </Skeleton>
                                </div>
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
        </>
    )
}