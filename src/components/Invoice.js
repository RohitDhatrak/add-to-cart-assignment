import React from "react";
import { Flex, Heading, Divider, Box } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext";

export function Invoice() {
    const { cart } = useAppContext();

    function calcaulateTotalWithoutDiscount() {
        return cart.reduce(
            (total, product) => product.price * product.quantity + total,
            0
        );
    }

    function calculateDiscount() {
        return cart.reduce(
            (total, product) =>
                product.price * (product.discount / 100) * product.quantity +
                total,
            0
        );
    }

    return (
        <Flex direction="column" w="20em" fontSize="1.1rem">
            <Heading size="md" p="1em 0">
                Invoice
            </Heading>
            <Flex justifyContent="space-between">
                <Box>{`Price (${cart.length} ${
                    cart.length > 1 ? "items" : "item"
                })`}</Box>
                <Box>{`₹${calcaulateTotalWithoutDiscount()}`}</Box>
            </Flex>
            <Flex justifyContent="space-between">
                <Box>{`Discount`}</Box>
                <Box color="green.500">{`-₹${calculateDiscount()}`}</Box>
            </Flex>
            <Divider p="0.5em" />
            <Flex justifyContent="space-between" p="1em 0">
                <Box>{`Total`}</Box>
                <Box>{`₹${
                    calcaulateTotalWithoutDiscount() - calculateDiscount()
                }`}</Box>
            </Flex>
        </Flex>
    );
}
