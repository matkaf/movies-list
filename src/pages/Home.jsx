import { Grid } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Home() {
    return (
        <Grid
            templateAreas={
                `"header header"
            "menu main"
            "menu footer"
            `
            }
            gridTemplateColumns={'1fr 4fr'}
            gridTemplateRows={'8vh 84vh 8vh'}
        >
            <Header />
            <Menu />
            <Main />
            <Footer />
        </Grid>
    )
}
