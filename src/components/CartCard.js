import { useState } from "react";
import { Flex, Box, Image, Button, Input } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext";

export function CartCard({ product, isSavedForLater }) {
    const { cart, setCart, saveForLater, setSaveForLater } = useAppContext();
    const [quantity, setQuantity] = useState(product.quantity);

    function removeFromCart() {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    }

    function saveToLater() {
        const saveToLaterProduct = cart.find((item) => item.id === product.id);
        removeFromCart();
        setSaveForLater([...saveForLater, saveToLaterProduct]);
    }

    function removeFromSavedForLater() {
        const newSaveForLater = saveForLater.filter(
            (item) => item.id !== product.id
        );
        setSaveForLater(newSaveForLater);
    }

    function moveToCart() {
        const newCartProduct = saveForLater.find(
            (item) => item.id === product.id
        );
        removeFromSavedForLater();
        setCart([...cart, newCartProduct]);
    }

    function changeQuantity(e, operation, isInCart) {
        const newProduct = isInCart
            ? cart.find((item) => item.id === product.id)
            : saveForLater.find((item) => item.id === product.id);

        if (operation) {
            if (operation === "increase") {
                setQuantity(Number(quantity) + 1);
                newProduct.quantity = Number(quantity) + 1;
            } else {
                setQuantity(quantity - 1);
                newProduct.quantity = quantity - 1;
            }
        } else {
            setQuantity(e.target.value);
            if (e.target.value >= 1) newProduct.quantity = e.target.value;
        }

        if (isInCart) {
            const newCart = cart.map((item) =>
                item.id === product.id ? newProduct : item
            );
            setCart(newCart);
        } else {
            const newSaveForLater = saveForLater.map((item) =>
                item.id === product.id ? newProduct : item
            );
            setSaveForLater(newSaveForLater);
        }
    }

    console.log(cart);

    return (
        <Box>
            <Flex gap="1em">
                <Image src={product.image} h="10em" alt={product.name} />
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
                    <Flex marginTop="1em" gap="0.5em">
                        <Button
                            disabled={product.quantity <= 1}
                            onClick={(e) =>
                                changeQuantity(e, "decrease", !isSavedForLater)
                            }
                        >
                            -
                        </Button>
                        <Input
                            w="4em"
                            value={quantity}
                            onChange={(e) =>
                                changeQuantity(e, false, !isSavedForLater)
                            }
                            textAlign="center"
                            isInvalid={quantity <= 0}
                            errorBorderColor="red.300"
                        />
                        <Button
                            onClick={(e) =>
                                changeQuantity(e, "increase", !isSavedForLater)
                            }
                        >
                            +
                        </Button>
                    </Flex>
                    <Flex marginTop="1em">
                        {!isSavedForLater && (
                            <Button
                                backgroundColor="transparent"
                                onClick={saveToLater}
                            >
                                Save for Later
                            </Button>
                        )}
                        {isSavedForLater && (
                            <Button
                                backgroundColor="transparent"
                                onClick={moveToCart}
                            >
                                Move to Cart
                            </Button>
                        )}
                        <Button
                            backgroundColor="transparent"
                            onClick={() =>
                                isSavedForLater
                                    ? removeFromSavedForLater()
                                    : removeFromCart()
                            }
                        >
                            Remove
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
