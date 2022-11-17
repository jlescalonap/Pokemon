import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Spacer, Text, useTheme } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <NextLink href="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
        </div>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favorites"}>
        <div style={{ marginRight: '20px' }}>
          <Text color="white">Favoritos</Text>
        </div>
      </NextLink>
    </div>
  );
};
