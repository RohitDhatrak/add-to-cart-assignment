import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Card } from "../components";
import { products } from "../data";

export function ProductListing() {
    return (
        <Box as="main" p="1em">
            <Heading as="h1" size="md">
                Product Listing
            </Heading>
            <Flex wrap="wrap" gap="2em" p="1em" as="article">
                {products.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </Flex>
        </Box>
    );
}
