import React from 'react'
import { Box, Input, Button, Container, Flex } from "@chakra-ui/react"
import { useState } from "react";
import Todoes from './Todoes'
import { useEffect } from 'react';

let getData = () => {
    let listOfData = localStorage.getItem("list")
    console.log(listOfData);
    if (listOfData) {
        return JSON.parse(localStorage.getItem("list"))
    } else {
        return []
    }


}
const Todo = () => {
    const [change, setChange] = useState();

    const [data, setData] = useState([getData()]);
    const handleClick = () => {
        if (data !== "") {
            setData([...data, change]);

        }
        setChange(" ");
    };
    const deleteItems = (id) => {
        let newTodo = data.filter((ele, index) => {
            return id !== index;

        })
        setData(newTodo)

    }

    useEffect(() => {

        localStorage.setItem("list", JSON.stringify(data))

    }, [data])
    return (
        <>
            <div style={{
                padding: "0",
                boxSizing: "border-box",
                margin: "0",
                // backgroundColor: "gainsboro",
                fontFamily: "Arial",
                width: "100%",
                height: "100vh"

            }}>

                <Container width={"80 vw"} height={"20vh"}>
                    <Box >
                        <Box >
                            <Flex gap={5} p={10}>
                                <Input placeholder='Enter Task' size={"lg"} boxShadow='dark-lg' p='6' rounded='md' bg='white' value={change} onChange={((e) => { setChange(e.target.value) })} />
                                <Button colorScheme='blue' size={'lg'} onClick={() => { handleClick() }}>Add</Button>

                            </Flex>
                        </Box>

                        <Box />

                    </Box>

                </Container>
                <Todoes data={data} deleteItems={deleteItems} />
            </div>


        </>
    )
}

export default Todo