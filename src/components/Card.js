import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Image, Button } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext";

export function Card({ product }) {
    const { cart, setCart, saveForLater, setSaveForLater } = useAppContext();
    const navigate = useNavigate();

    function addToCart() {
        const isSavedForLater = saveForLater.some(
            (item) => item.id === product.id
        );
        if (isSavedForLater) {
            const newSavedForLater = saveForLater.filter(
                (item) => item.id !== product.id
            );
            setSaveForLater(newSavedForLater);
        }
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
    }

    function isAddedToCart() {
        return cart.some((item) => item.id === product.id);
    }

    return (
        <Box>
            <Flex direction="column">
                <Image src={product.image} w="15em" alt={product.name} />
                <Box p="0.5em">
                    <Box fontWeight="500">{product.name}</Box>
                    <Box color="#535766" fontWeight="400" fontSize="0.85rem">
                        {product.brand}
                    </Box>
                    <Flex gap="0.5em">
                        {!!product.discount && (
                            <Box fontWeight="500">{`₹ ${
                                product.price -
                                product.price * (product.discount / 100)
                            }`}</Box>
                        )}
                        <Box
                            textDecorationLine={
                                !!product.discount ? "line-through" : "initial"
                            }
                            color={!!product.discount ? "#9b9ba0" : "inherit"}
                            fontWeight="500"
                        >{`₹ ${product.price}`}</Box>
                    </Flex>
                    {isAddedToCart() ? (
                        <Button
                            w="100%"
                            marginTop="0.5em"
                            onClick={() => navigate("/cart")}
                        >
                            Go to Cart
                        </Button>
                    ) : (
                        <Button
                            w="100%"
                            marginTop="0.5em"
                            backgroundColor="blue.100"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </Button>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
