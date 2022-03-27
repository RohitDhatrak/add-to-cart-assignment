import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext";

export function Header() {
    const navigate = useNavigate();
    const { cart } = useAppContext();

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            p="1em"
            bgColor="blue.100"
        >
            <Heading size="lg" onClick={() => navigate("/")} cursor="pointer">
                AltStore
            </Heading>
            <Button
                fontSize="1.2rem"
                margin="0"
                onClick={() => navigate("/cart")}
            >
                {`Cart (${cart.length})`}
            </Button>
        </Flex>
    );
}
