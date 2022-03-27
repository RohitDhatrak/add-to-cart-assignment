import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext";
import { CartCard, Invoice } from "../components";

export function Cart() {
    const { cart, saveForLater } = useAppContext();

    return (
        <Flex as="main" p="1em 5em" justifyContent="space-between">
            <Box>
                <Heading as="h1" size="md">
                    {`Cart (${cart.length} items)`}
                </Heading>
                <Flex
                    wrap="wrap"
                    gap="2em"
                    p="1em"
                    as="article"
                    direction="column"
                >
                    {cart.map((product) => (
                        <CartCard product={product} key={product.id} />
                    ))}
                </Flex>

                {!!saveForLater.length && (
                    <Heading as="h1" size="md" marginTop="1em">
                        {`Saved For Later (${saveForLater.length} items)`}
                    </Heading>
                )}
                <Flex
                    wrap="wrap"
                    gap="2em"
                    p="1em"
                    as="article"
                    direction="column"
                >
                    {saveForLater.map((product) => (
                        <CartCard
                            product={product}
                            key={product.id}
                            isSavedForLater={true}
                        />
                    ))}
                </Flex>
            </Box>
            {!!cart.length && <Invoice />}
        </Flex>
    );
}
