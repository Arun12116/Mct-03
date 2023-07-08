import React from 'react'
import { Box, Flex , Button} from "@chakra-ui/react"

const Todoes = ({ data, deleteItems }) => {


    return (

        <>
            <Box>
                <Flex gap={10} mt={10} justifyContent={'space-around'}>

                    <Box boxShadow='dark-lg' p='6' overflow={'scroll'} rounded='md' bg='white' style={{ width: "20vw", height: "70vh", backgroundColor: "gainsboro", color: "white", textAlign: "center" }} >
                        <Box textAlign={'center'} fontSize={"2rem"} color={'black'}>
                            <h1>All Task</h1>

                        </Box>
                        {
                            data.map((items, index) => {

                                return (
                                    <>
                                        <Box  style={{ width: "100%", height: "5vh", backgroundColor: "white", color: "black", textAlign: "center", marginTop: "1rem" }}>
                                            <Flex justifyContent={"space-around"}>
                                                <h1>{items}</h1>
                                                <Button className='btn' colorScheme='red' size={'md'} onClick={() => { deleteItems(index) }}>Delete</Button>

                                            </Flex>

                                        </Box>




                                    </>
                                )

                            })
                        }

                    </Box>
                    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' style={{ width: "20vw", height: "70vh", backgroundColor: "gainsboro", color: "black" }}>
                        <Box textAlign={'center'} fontSize={"2rem"} >
                            <h1>In Progress</h1>
                        </Box>


                    </Box>
                    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' style={{ width: "20vw", height: "70vh", backgroundColor: "gainsboro", color: "black" }}>
                        <Box textAlign={'center'} fontSize={"2rem"}>
                            <h1>Paused</h1>
                        </Box>


                    </Box>

                </Flex>


            </Box>


        </>
    )
}

export default Todoes